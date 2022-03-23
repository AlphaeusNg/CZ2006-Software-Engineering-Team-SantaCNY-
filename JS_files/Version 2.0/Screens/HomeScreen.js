import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../Firebase';
/**
 * Default function for generating Home/Profile Screen
 * @module
 * @return {component} The Profile Interface screen to be displayed
 */


const HomeScreen = () =>{
    //delcare constant , navigation to be used 
    const navigation = useNavigation()
    //delcare constant function , to use for signout button
    const handleSignOut = () =>{
        auth
            .signOut()
            .then(()=>{
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return(
        <View style={styles.container}>
            <Text>Email:{auth.currentUser?.email}</Text>
            <TouchableOpacity 
            onPress ={handleSignOut}
            style={styles.button}>
                <Text style ={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    //General Container for the page
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    //button style (Button styling)
    button:{
        backgroundColor:'grey',
        width:'60%',
        padding :15 ,
        borderRadius:10,
        alignItems:'center',
        marginTop:40,
    },
    //buttontext style (Output text for signout button)
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
})