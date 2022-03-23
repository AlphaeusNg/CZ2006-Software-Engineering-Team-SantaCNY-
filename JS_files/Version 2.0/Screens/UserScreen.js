import React, { useState, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

export default function UserScreen() {

  const [phoneNumber , setPhoneNumber] = useState('');
  const [email , setEmail] = useState('');
  const [emergCont1 , setEmergCont1] = useState('');
  const [emergCont2 , setEmergCont2] = useState('');
  const [emergMsg , setEmergMsg] = useState('');

  
    return (
      <KeyboardAvoidingView
      style = {styles.container}
      behavior="padding"
     >
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Alexander Lim</Text>
              <Text style={styles.info}>Age 30</Text>

              <Text style={styles.label}>Phone Number</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <TextInput 
                textAlign='center'
                onPressIn={setPhoneNumber}
                placeholder="Enter your Phone Number"
                value = {phoneNumber}/>  
              </TouchableOpacity>     
              
              <Text style={styles.label}>Email Address</Text>         
              <TouchableOpacity style={styles.buttonContainer}>
                <TextInput 
                textAlign='center'
                onPressIn={setEmail}
                placeholder="Enter Your Email"
                value = {email}/> 
              </TouchableOpacity>

              <Text style={styles.label}>Emergency Contact 1</Text>         
              <TouchableOpacity style={styles.buttonContainer}>
                <TextInput 
                textAlign='center'
                onPressIn={setEmergCont1}
                placeholder="Enter Emergency Contact"
                value = {emergCont1}/> 
              </TouchableOpacity>

              <Text style={styles.label}>Emergency Contact 2</Text>         
              <TouchableOpacity style={styles.buttonContainer}>
                <TextInput 
                textAlign='center'
                onPressIn={setEmergCont2}
                placeholder="Enter Emergency Contact"
                value = {emergCont2}/> 
              </TouchableOpacity>

              <Text style={styles.label}>Emergency Message</Text>         
              <TouchableOpacity style={styles.emergencyMessage}>
                <TextInput 
                textAlign='center'
                onPressIn={setEmergMsg}
                placeholder="Edit Emergency Message"
                value = {emergMsg}/> 
              </TouchableOpacity>

            </View>
        </View>
      </KeyboardAvoidingView>
    );
  
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "darkturquoise",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:18,
    color:"black",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  label:{
    fontSize: 12,
    color: 'black',
    fontWeight: '500'

  },
  info:{
    fontSize:10,
    color: "grey",
    marginBottom: 10
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "aliceblue",
  },
  emergencyMessage: {
    marginTop:10,
    height:70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    borderColor: 'grey',
    borderWidth: 1
  },
});
