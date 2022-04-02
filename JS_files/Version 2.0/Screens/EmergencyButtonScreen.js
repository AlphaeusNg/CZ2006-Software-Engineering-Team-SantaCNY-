import React, { useEffect } from 'react';
import { SafeAreaView, Text, Button, View, Image,
        PermissionsAndroid, TouchableOpacity, StyleSheet } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';
import Sound from 'react-native-sound';
import PushNotification from "react-native-push-notification";
import { firebase } from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { getDistance } from 'geolib';


/**
 * Default function for the emergency button
 * @module
 * @return {component} The emergency button to be displayed
 */
function EmergencyButtonScreen() {
    // Refer to firebase realtime database
    const databaseRef = firebase
    .app()
    .database('https://healthapp2-388fc-default-rtdb.asia-southeast1.firebasedatabase.app/')
    .ref('Trigger');

    // Ask permission to access user's location
    const askLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                title: 'Example App ACCESS_FINE_LOCATION Permission',
                message: 'Example App needs access to your ACCESS_FINE_LOCATION',
                },
            );
            console.log(granted);
        }
    }

    askLocationPermission();

    // Initialize Geocoder
    Geocoder.init("AIzaSyC3qeIg0RnndQLfOZUEqerrlwhWNTtA6KE");

    // Ask permission for sending SMS
    const askSMSPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.SEND_SMS,
                {
                title: 'Example App SEND_SMS Permission',
                message: 'Example App needs access to your SEND_SMS',
                },
            );
            console.log(granted);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                alert('You can use the SEND_SMS');
            } else {
                alert('SEND_SMS Permission Denied');
            }
        } else {
            alert('You can use the SEND_SMS ');
        }
    }

    askSMSPermission();

    // Send the SMS to target phone numbers
    const sendSMSHandler = () => {
        var phoneNumbers = {
            "addressList": ["+6588906450"]          // receiver's phone number
            // add emergency contact numbers later
        };

        // Extract sender's coordinates
        Geolocation.getCurrentPosition( 
            (position) => { 
                var coord = position.coords;
                // Convert coordinates to address
                Geocoder
                    .from(coord.latitude, coord.longitude)
                    .then(json => {
                        var message = "The owner of this number is in an emergency and needs your help!! His/her current location: " 
                                      + json.results[0].formatted_address + " (" + coord.latitude + ", " + coord.longitude + ").";
                        // Send the SMS
                        SmsAndroid.autoSend(
                            JSON.stringify(phoneNumbers),
                            message,
                            (fail) => {
                                console.log('Failed with this error: ' + fail);
                            },
                            (success) => {
                                console.log('SMS sent successfully');
                            },
                        );
                    })
                    .catch(error =>
                        console.warn(error)
                    );
            }
        )
    }


    // Set alarm sound
    Sound.setCategory('Playback');
    var alarmSound = new Sound('alarm_sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        console.log('load the sound successfully ' + alarmSound.getDuration());
        alarmSound.setNumberOfLoops(-1);       // loop play
        }
    );

    // Play alarm sound
    const playAlarmHandler = () => {
        alarmSound.play(success => {
            if (success) {
            console.log('successfully finished playing');
            } else {
            console.log('playback failed due to audio decoding errors');
            }
        });
    }


    // Configurations for local push notifications
    const notificationConfig = () => {
        PushNotification.configure({
            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
              // process the notification
            },
          });
        PushNotification.createChannel(
            {
                channelId: "0",
                channelName: "Local Channel",
                channelDescription: "A channel for local push notifications",
                playSound: false,
            },
            (created) => {
                if (created) {
                    console.log('Notification channel created successfully')
                } else {
                    console.log('Notification channel already exists')
                }
            }
        );
    }

    notificationConfig();

    let isFirstTime = true;   
    
    // Listen to changes in database
    databaseRef
        .on('value', snapshot => {
            if (isFirstTime) {
                isFirstTime = false;  // do not push notification when first reading the database
            } else {
                // Get sender's address and coordinates
                let info_other = snapshot.val();

                // Get receiver's coordinates
                Geolocation.getCurrentPosition( 
                    (position) => { 
                        // Calculate distance between sender and receiver
                        let distance = getDistance(
                            { latitude: position.coords.latitude, longitude: position.coords.longitude },
                            { latitude: info_other.latitude, longitude: info_other.longitude }
                        );
                        if (distance <= 500) {
                            PushNotification.localNotification({
                                channelId: "0",
                                title: "EMERGENCY HELP!",
                                message: "Someone is in an emergency and needs your help!! His/her current location: " 
                                      + info_other.address + " (" + info_other.latitude + ", " + info_other.longitude + ").",
                            });
                        }
                    })
            }
        });


    // Push notification to users
    const sendNotification = ()  => {
        // Get sender's coordinates
        Geolocation.getCurrentPosition( 
            (position) => { 
                // Convert sender's coordinates into address
                Geocoder.from(position.coords.latitude, position.coords.longitude)
                    .then(json => {
                        var info = {
                            latitude: position.coords.latitude, 
                            longitude: position.coords.longitude,
                            address: json.results[0].formatted_address,
                        };
                        // Update database
                        databaseRef
                            .update(info)
                            .then(() => console.log('Coordinates updated to database', info))
                    })
                    .catch(error =>
                        console.warn(error)
                    );
            }, 
            (error) => { 
                console.log(error.code, error.message); 
            }, 
        ); 
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         sendNotification();
    //     }, 15000);
    //     return () => clearInterval(interval);
    //   }, []);


    let clickTime = 0;   // number of times the button has been clicked

    // Handler for the emergency button 
    // will send sms to the receiver and play alarm sound after tapping the button 3 times
    const emergencyBuuttonHandler = () => {
        console.log('emergency button clicked');
        clickTime++;
        if (clickTime == 3) {
            sendSMSHandler();
            playAlarmHandler();
            sendNotification();
            clickTime = 0;
        }
    }

    // Handler for the emergency button 
    // will stop the alarm sound
    const backButtonHandler = () => {
        clickTime = 0;
        alarmSound.stop(() => {
            console.log('alarm stopped');
        });
        // Todo: back to the main UI
    }


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.returnButton} onPress={backButtonHandler}>
                <Image style={styles.returnButtonImage} source={require("../assets/backButtonIcon.png")}/>
            </TouchableOpacity>
            <View style={styles.emergencyButtonContainer}>
                <TouchableOpacity style={styles.EmergencyButton} onPress={emergencyBuuttonHandler}>
                    <Text style={styles.SOSText}>SOS</Text>
                </TouchableOpacity>
                <Text style={styles.promptText}>Please tap for 3 times!</Text>
            </View>
        </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    returnButton: {
        margin: 15,
        height: 60,
        width: 60,
        justifyContent: 'center',
        backgroundColor: '#C7C3BD',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    returnButtonImage: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    emergencyButtonContainer: {
        alignItems: 'center',   
        justifyContent: 'center',
        flexGrow: 1,
    },
    EmergencyButton: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 200,
        backgroundColor: '#F53900',
    },
    SOSText: {
        color: '#FCF9F6',
        fontSize: 50,
        fontWeight: 'bold'
    },
    promptText: {
        top: 20,
        fontSize: 20,
    }
})
  
export default EmergencyButtonScreen;