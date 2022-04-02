import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing all different Screens
import HomeScreen from './screens/HomeScreen';
import MainMenu from './screens/MainMenu';
import ResetPassword from './screens/ResetPassword';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import MedicalInfoUI from './screens/MedicalInfoScreen';
import GuideInfoUI from './screens/GuideInfoScreen';
import EmergencyButtonScreen from './screens/EmergencyButtonScreen';
import CheckAEDScreen from './screens/CheckAEDScreen';
//Function App that returns Nagivator Function
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    
    // <EmergencyButtonScreen></EmergencyButtonScreen>
//     // <EmergencyButtonScreen></EmergencyButtonScreen>
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
    
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Main Menu" component={MainMenu} />
    <Stack.Screen name="Reset Password" component={ResetPassword} />
    <Stack.Screen name="Medical Info" component = {MedicalInfoUI}/>
    <Stack.Screen name="Guide Info" component = {GuideInfoUI}/>
    <Stack.Screen name="Emergency Button" component={EmergencyButtonScreen }/>
    <Stack.Screen name = "Check AED" component={CheckAEDScreen}/>
    </Stack.Navigator>
</NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;