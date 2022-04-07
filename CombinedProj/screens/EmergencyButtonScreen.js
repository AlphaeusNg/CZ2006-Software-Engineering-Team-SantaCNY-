import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image,
         TouchableOpacity, StyleSheet } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';
import Sound from 'react-native-sound';
import { firebase } from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { useNavigation } from '@react-navigation/native';

/**
 * Default function for the emergency button
 * @module
 * @return {component} The emergency button to be displayed
 */
function EmergencyButtonScreen() {
    const navigation = useNavigation();

    // Create states to store emergency contact number and emergency help message 
    const [emerContactNum1, setEmerContactNum1] = useState();
    const [emerContactNum2, setEmerContactNum2] = useState();
    const [emerContactNum3, setEmerContactNum3] = useState();
    const [emerHelpMsg, setEmerHelpMsg] = useState();

    // Get emergency contact numbers and emergency help message of the current user from firebase
    useEffect(() => {     
        // Get userId
        const user = firebase.auth().currentUser;
        if (user) {
            console.log('uid: ', user.uid);
        } else {
            console.log('fail to get user id')
        }

        // Refer to firebase realtime database which stores user's profile
        const database_profile = firebase
            .app()
            .database('https://healthapp2-388fc-default-rtdb.asia-southeast1.firebasedatabase.app/')
            .ref('/Profile/' + user.uid)

        // Store profiles into states
        database_profile
            .once('value')
            .then(snapshot => {
              let info = snapshot.val();
                if (info != null) {
                    setEmerContactNum1(info.emerContactNum1);
                    setEmerContactNum2(info.emerContactNum2);
                    setEmerContactNum3(info.emerContactNum3);
                    setEmerHelpMsg(info.emerHelpMsg);
                }
            });
    }, []);


    // Refer to firebase realtime database
    const database_trigger = firebase
    .app()
    .database('https://healthapp2-388fc-default-rtdb.asia-southeast1.firebasedatabase.app/')
    .ref('Trigger');

    // Initialize Geocoder
    Geocoder.init("");    // fill in the google api key

    // Send SMS
    const sendSMS = async (phoneNumbers, message) => {    
        console.log(JSON.stringify(phoneNumbers));
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
    }

    // Send SMS to target phone numbers with specified content
    const sendSMSHandler = () => {
        var phoneNumbers = ["+6588906450"];        // phone number of the emergency help center
        
        // Add emergency contact numbers to the receiver list
        for (const emerContactNum of [emerContactNum1, emerContactNum2, emerContactNum3]) {
            if (emerContactNum != null && emerContactNum != "") {
                let num = emerContactNum;
                if (!num.includes('+')) num = '+65' + num;
                if (!phoneNumbers.includes(num)) phoneNumbers.push(num);
            }
        }
        console.log(phoneNumbers);

        // Organize the SMS message which is going to be sent
        let message = "";
        if (emerHelpMsg == null || emerHelpMsg == "") {
            message = "The owner of this number is in an emergency and needs your help!!"
        } else {
            message = emerHelpMsg;
        }

        // Extract sender's coordinates
        Geolocation.getCurrentPosition( 
            (position) => { 
                var coord = position.coords;
                // Convert coordinates to address
                Geocoder
                    .from(coord.latitude, coord.longitude)
                    .then(json => {
                        message +=  " His/her current location: " + json.results[0].formatted_address
                                    + " (" + coord.latitude + ", " + coord.longitude + ").";
                        for (let i = 0; i < phoneNumbers.length; i++) {
                            let num = phoneNumbers[i];
                            sendSMS(num, message);
                        }
                    })
                    .catch(error => {
                        message +=  " His/her current location: "
                                    + "(" + coord.latitude + ", " + coord.longitude + ").";
                        for (let i = 0; i < phoneNumbers.length; i++) {
                            let num = phoneNumbers[i];
                            sendSMS(num, message);
                        }
                        console.warn(error)
                    });
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
                        database_trigger
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

    let clickTime = 0;   // number of times the button has been clicked

    // Handler for the emergency button 
    // will send SMS to the receivers and play alarm sound after tapping the button 3 times
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
        navigation.replace("Main Menu")
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
                <Text style={styles.promptText}>Tap 3 times!</Text>
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
        // justifyContent: 'center',
        // flexGrow: 1,
        marginTop:40
    },
    EmergencyButton: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 80,
        padding: 10,
        borderRadius: 200,
        backgroundColor: '#F53900',
    },
    SOSText: {
        color: '#FCF9F6',
        fontSize: 100,
        fontWeight: 'bold'
    },
    promptText: {
        top: 10,
        fontSize: 40,
        fontWeight: 'bold'
    }
})
  
export default EmergencyButtonScreen;