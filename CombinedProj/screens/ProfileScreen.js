import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';

// Ensure that input box are dynamically updated to screen size
const SCREEN_WIDTH = Dimensions.get('screen').width - 30;

// Constant color value for easy change of color scheme
const COLOR_CONST = 'aliceblue';

/**
 * Default function for generating Home/Profile Screen
 * @module
 * @return {component} The Profile Interface screen to be displayed
 */

const ProfileScreen = () => {
  // Declare states for each emergency contact number and emergency help messaage
  const [emerContactNum1, setEmerContactNum1] = useState();
  const [emerContactNum2, setEmerContactNum2] = useState();
  const [emerContactNum3, setEmerContactNum3] = useState();
  const [emerHelpMsg, setEmerHelpMsg] = useState();

  // Get userId
  const user = firebase.auth().currentUser;
  if (user) {
    console.log('uid: ', user.uid);
  } else {
    console.log('fail to get user id');
  }

  // Refer to firebase realtime database
  const databaseRef = firebase
    .app()
    .database(
      'https://healthapp2-388fc-default-rtdb.asia-southeast1.firebasedatabase.app/',
    )
    .ref('/Profile/' + user.uid);

  // Read medical info of the current user
  useEffect(() => {
    databaseRef.once('value').then(snapshot => {
      let info = snapshot.val();
      if (info != null) {
        setEmerContactNum1(info.emerContactNum1);
        setEmerContactNum2(info.emerContactNum2);
        setEmerContactNum3(info.emerContactNum3);
        setEmerHelpMsg(info.emerHelpMsg);
      }
    });
  }, []);

  // Save the information keyed in the MedicalInfo UI input boxes
  const saveButtonHandler = async () => {
    let info = {
      emerContactNum1: emerContactNum1,
      emerContactNum2: emerContactNum2,
      emerContactNum3: emerContactNum3,
      emerHelpMsg: emerHelpMsg,
    };
    console.log(info);
    databaseRef.update(info).then(() => console.log('Profile updated.'));
  };

  //delcare constant navigation to be used
  const navigation = useNavigation();
  //delcare constant function , to use for signout button
  const signOutHandler = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput
        style={styles.inputEmerContactNum1}
        textAlign="center"
        placeholder=""
        onChangeText={text => {
          setEmerContactNum1(text);
        }}
        value={emerContactNum1}
      />
      <TextInput
        style={styles.inputEmerContactNum2}
        textAlign="center"
        placeholder=""
        onChangeText={text => {
          setEmerContactNum2(text);
        }}
        value={emerContactNum2}
      />
      <TextInput
        style={styles.inputEmerContactNum3}
        textAlign="center"
        placeholder=""
        onChangeText={text => {
          setEmerContactNum3(text);
        }}
        value={emerContactNum3}
      />
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.emerHelpMsg}
        textAlign="left"
        onChangeText={text => setEmerHelpMsg(text)}
        value={emerHelpMsg}
        placeholder="The owner of this number is in an emergency and needs your help!!"
      />

      <Text style={styles.emailTitle}>Email</Text> 
      <Text style={styles.emailText}>{auth().currentUser?.email}</Text> 
      <Text style={styles.emerContactNum1SubText}>No.1</Text> 
      <Text style={styles.emerContactNum2SubText}>No.2</Text> 
      <Text style={styles.emerContactNum3SubText}>No.3</Text> 
      <Text style={styles.emerHelpMsgSubText}>Emergency Help Message</Text> 
      <Text style={styles.emerConList}>Emergency Contact List </Text> 
      <TouchableOpacity onPress={saveButtonHandler} style={styles.saveButtonContainer}> 
        <Text style={styles.saveButtonText}>Save</Text> 
       </TouchableOpacity> 
      <TouchableOpacity onPress={signOutHandler}  style={styles.signOutButton}> 
        <Text style={styles.signOutButtonText}>Sign out</Text> 
      </TouchableOpacity> 
    </KeyboardAvoidingView> 
  ); 
}; 
 
export default ProfileScreen; 
 
// Store different const styles for creation of different items 
const styles = StyleSheet.create({ 
  // General container for whole screen 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  saveButtonContainer:{ 
 position: 'absolute', 
    bottom: 180, 
 right: 20,  
    backgroundColor: 'grey', 
    width: '15%', 
 height : '6%', 
    padding: 12, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginTop: 40,}, 
   
   
  saveButtonText:{ 

    color: 'white', 
  fontWeight: '700', 
  fontSize: 14,}, 
 
  emailTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    position: 'absolute', 
    left: 25, 
    top: 45, 
  }, 
 
  emailText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    position: 'absolute', 
    right: 25, 
    top: 45, 
  }, 
  emerConList:{ 
   fontSize:20, 
   fontWeight: 'bold', 
   position:'absolute', 
   top:90, 
   left: 25 
  }, 
  emerContactNum1SubText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    position: 'absolute', 
    left: 25, 
    top: 140, 
  }, 
 
  inputEmerContactNum1: { 
    backgroundColor: COLOR_CONST, 
    width: SCREEN_WIDTH / 2, 
    paddingHorizontal: 25, 
    paddingVertical: 5, 
    borderRadius: 5, 
    marginTop: 5, 
    position: 'absolute', 
    top: 130, 
    left: 75, 
    flex: 1, 
  }, 
  emerContactNum2SubText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    position: 'absolute', 
    left: 25, 
    top: 180, 
  }, 
 
  inputEmerContactNum2: { 
    backgroundColor: COLOR_CONST, 
    width: SCREEN_WIDTH / 2, 
    paddingHorizontal: 25, 
    paddingVertical: 5, 
    borderRadius: 5, 
    marginTop: 5, 
    position: 'absolute', 
    top: 170, 
    left: 75, 
    flex: 1, 
  }, 
 
  emerContactNum3SubText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    position: 'absolute', 
    left: 25, 
    top: 220, 
  }, 
 
  inputEmerContactNum3: { 
    backgroundColor: COLOR_CONST, 
    width: SCREEN_WIDTH / 2, 
    paddingHorizontal: 25, 
    paddingVertical: 5, 
    borderRadius: 5, 
    marginTop: 5, 
    position: 'absolute', 
    top: 210, 
    left: 75, 
    flex: 1, 
  }, 
 
  emerHelpMsgSubText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    position: 'absolute', 
    left: 25, 
    top: 260, 
  }, 
 
  emerHelpMsg: { 
    backgroundColor: COLOR_CONST, 
    fontSize:20,
    color: 'grey', 
    width: SCREEN_WIDTH-5,
    paddingHorizontal: 10, 
    paddingVertical: 50, 
    borderRadius: 5, 
    marginTop: 5, 
    position: 'absolute', 
    top: 290, 
    right: 15, 
  }, 
 
 
  signOutButton: { 
    position: 'absolute', 
    bottom: 60, 
    backgroundColor: 'grey', 
    width: '60%', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginTop: 40, 
  }, 
 
  signOutButtonText: { 
    color: 'white', 
    fontWeight: '700', 
    fontSize: 16, 
  }, 
});