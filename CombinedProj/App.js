import React from 'react';
import {StyleSheet, PermissionsAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {firebase} from '@react-native-firebase/database';
import {getDistance} from 'geolib';
import Geolocation from '@react-native-community/geolocation';
import PushNotification from 'react-native-push-notification';

//Importing all different Screens
import ProfileScreen from './screens/ProfileScreen';
import MainMenu from './screens/MainMenu';
import ResetPassword from './screens/ResetPassword';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import MedicalInfoUI from './screens/MedicalInfoScreen';
import GuideInfoUI from './screens/GuideInfoScreen';
import EmergencyButtonScreen from './screens/EmergencyButtonScreen';
import CheckAEDScreen from './screens/CheckAEDScreen';
//No mercy
//bybye
//Function App that returns Nagivator Function
const Stack = createNativeStackNavigator();
const App = () => {
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
  };

  askLocationPermission();

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
      // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //     alert('You can use the SEND_SMS');
      // } else {
      //     alert('SEND_SMS Permission Denied');
      // }
    } else {
      alert('You can use the SEND_SMS ');
    }
  };

  askSMSPermission();

  // Configurations for local push notifications
  const notificationConfig = () => {
    PushNotification.configure({
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        // process the notification
      },
    });
    PushNotification.createChannel(
      {
        channelId: '0',
        channelName: 'Local Channel',
        channelDescription: 'A channel for local push notifications',
        playSound: false,
      },
      created => {
        if (created) {
          console.log('Notification channel created successfully');
        } else {
          console.log('Notification channel already exists');
        }
      },
    );
  };

  notificationConfig();

  // Refer to firebase realtime database
  const database_trigger = firebase
    .app()
    .database(
      'https://healthapp2-388fc-default-rtdb.asia-southeast1.firebasedatabase.app/',
    )
    .ref('Trigger');

  // Listen to changes in database
  let isFirstTime = true;
  database_trigger.on('value', snapshot => {
    if (isFirstTime) {
      isFirstTime = false; // do not push notification when first reading the database
    } else {
      // Get sender's address and coordinates
      let info_other = snapshot.val();

      // Get receiver's coordinates
      Geolocation.getCurrentPosition(position => {
        // Calculate distance between sender and receiver
        let distance = getDistance(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          {latitude: info_other.latitude, longitude: info_other.longitude},
        );
        if (distance <= 500) {
          PushNotification.localNotification({
            channelId: '0',
            title: 'EMERGENCY HELP!',
            message:
              'Someone is in an emergency and needs your help!! His/her current location: ' +
              info_other.address +
              ' (' +
              info_other.latitude +
              ', ' +
              info_other.longitude +
              ').',
          });
        }
      });
    }
  });


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerTitleAlign:'center',
            headerTitleStyle:{
              fontSize:24,
              fontWeight:'bold'
            }
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="Reset Password" component={ResetPassword} />
        <Stack.Screen name="Medical Info" component={MedicalInfoUI} />
        <Stack.Screen name="Guide Info" component={GuideInfoUI} />
        <Stack.Screen
          name="Emergency Button"
          component={EmergencyButtonScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Check AED" component={CheckAEDScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
