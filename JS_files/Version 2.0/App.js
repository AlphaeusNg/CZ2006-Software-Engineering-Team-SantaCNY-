import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigator';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing all different Screens
import HomeScreen from './Screens/HomeScreen';
import MainMenu from './Screens/MainMenu';
import ResetPassword from './Screens/ResetPassword';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import MedicalInfoUI from './Screens/MedicalInfoScreen';
import GuideInfoUI from './Screens/GuideInfoScreen';
import EmergencyButtonScreen from './Screens/EmergencyButtonScreen';
//Function App that returns Nagivator Function
const Stack = createNativeStackNavigator();
const App = () => {
  return (
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
    {/* <Screen name = "Check AED" component={MyLocationMapMarker}/> */}
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