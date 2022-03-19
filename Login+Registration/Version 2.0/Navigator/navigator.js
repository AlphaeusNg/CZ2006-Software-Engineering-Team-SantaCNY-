import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import MainMenu from '../Screens/MainMenu';
import ResetPassword from '../Screens/ResetPassword';

const {Navigator,Screen} = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
    <Navigator initialRouteName='Login'>
      <Screen options={{headerShown: false}}name="Login" component={LoginScreen} />
      <Screen name="Home" component={HomeScreen} />
      <Screen options={{headerShown: false}}name="MainMenu" component={MainMenu} />
      <Screen name="Reset Password" component={ResetPassword} />
    </Navigator>
  </NavigationContainer>
)

export default AppNavigator