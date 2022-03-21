import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import MainMenu from '../Screens/MainMenu';
import ResetPassword from '../Screens/ResetPassword';
import RegistrationScreen from '../Screens/RegistrationScreen';

const {Navigator,Screen} = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator 
            initialRouteName='Login'
            screenOptions={
                {
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        fontSize: 24,
                        fontWeight: 'bold'
                    },
                    headerStyle: {
                        backgroundColor: 'tomato'
                    }
                }
            }
            >
        <Screen options={{headerShown: false}}name="Login" component={LoginScreen} />
        <Screen name="Registration" component={RegistrationScreen} />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Main Menu" component={MainMenu} />
        <Screen name="Reset Password" component={ResetPassword} />
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator