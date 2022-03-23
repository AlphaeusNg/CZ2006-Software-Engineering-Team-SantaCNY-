import React from 'react';
import { SafeAreaView, Text, Button, View, Image,
        PermissionsAndroid, TouchableOpacity, StyleSheet } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';
// import Sound from 'react-native-sound';


/**
 * Default function for the emergency button
 * @module
 * @return {component} The emergency button to be displayed
 */
function EmergencyButtonScreen() {
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

    // Send the SMS to target phone number
    const sendSMSHandler = () => {
        var phoneNumbers = {
            "addressList": ["+6588906450"]          // receiver's phone number
        };
        var message = "This is automated test message";

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


    // Set alarm sound
    var Sound = require('react-native-sound');
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

    let clickTime = 0;   // number of times the button has been clicked

    // Handler for the emergency button 
    // will send sms to the receiver and play alarm sound after tapping the button 3 times
    const emergencyBuuttonHandler = () => {
        console.log('emergency button clicked');
        clickTime++;
        if (clickTime == 3) {
            sendSMSHandler();
            playAlarmHandler();
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
                <Image style={styles.returnButtonImage} source={require("./assets/backButtonIcon.png")}/>
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
