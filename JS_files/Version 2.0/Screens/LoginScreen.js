import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-web';
import { auth } from '../Firebase';
/**
 * Default function for generating Login Screen
 * @module
 * @return {component} The Login User Interface screen to be displayed
 */
const LoginScreen = () =>{
     // Declare a new state variable, for setting Email
    const [Email, setEmail] = useState('')
    // Declare a new state variable, for setting Password
    const [password , setPassword] = useState('')
    //Declare const function used for navigation when authentication succeeds
    const navigation = useNavigation()
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Main Menu")
            }
        })

        return unsubscribe
    },[])
    //Declare const function that handles SignUp process(Not exactly used here)
    const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(Email,password)
        .then(UserCredentials => {
            const user = UserCredentials.user;
            console.log('Registered with:',user.Email);
        })
        .catch(error => alert(error.message))
    }
//Declare const function that handles the login process
const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(Email,password)
    .then(UserCredentials => {
        const user = UserCredentials.user;
        console.log('Logged in with:',user.Email);
    })
    .catch(error => alert(error.message))
}
//Declare navigation function to resetPassword screen
const resetPwHandler = () =>{
        navigation.navigate("Reset Password");
}
//Declare navigation function to registration screen
const registrationHandler = () =>{
        navigation.navigate("Registration");
}

    return(
        <KeyboardAvoidingView
          style = {styles.container}
          behavior = "padding">

            <View style = {styles.title}>
                <Text style = {styles.titleText} numberOfLines={1}>
                    Login Page
                </Text>
            </View>

            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder = "Email"
                    value = {Email}
                    onChangeText = {text => setEmail(text)}
                    style = {styles.input}
                />
                <TextInput
                    placeholder = "Password"
                    value = {password }
                    onChangeText = {text => setPassword(text)}
                    style = {styles.input}
                    secureTextEntry
                />
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style = {styles.button}
                    >
                        <Text style ={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={registrationHandler}
                    style = {[styles.button,styles.buttonOutline]}
                    >
                        <Text style ={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>

            <Text 
                onPress={resetPwHandler}
                style = {styles.plainText}> 
                Forgot Password? Reset here
            </Text>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    //General Container for the Login Screen
    container :{
        flex: 1,
        justifyContent :'center',
        alignItems:'center'
    },
    //inputContainer style (Container for input)
    inputContainer: {
        width:'70%'
    },
    //title style (Styling for title box)
    title:{
        width: '80%',
        height: 60,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60
    },
    //titleText style (Text output for title)
    titleText:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
    },
    //plainText style (Text output for resetPW button)
    plainText:{
        color: 'blue',
        fontSize: 14,
        marginTop: 5
    },
    //input style (Styling for input)
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    //buttonContainer(Container for login button)
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 40,
    },
    //button style (styling for the button)
    button:{
        backgroundColor:'grey',
        width:'100%',
        padding :15 ,
        borderRadius:10,
        alignItems:'center',
    },
    //buttonOutline style ( styling for the registration button)
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor : 'grey',
        borderWidth:2,
    },
    //buttonText style (Text output for  login button)
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    //buttonOutlineText(Text output for registraion button)
    buttonOutlineText:{
        color:'grey',
        fontWeight:'700',
    }
})  