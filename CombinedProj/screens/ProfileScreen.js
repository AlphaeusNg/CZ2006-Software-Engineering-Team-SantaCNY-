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
        style={styles.emerHelpMsg}
        textAlign="left"
        onChangeText={text => setEmerHelpMsg(text)}
        value={emerHelpMsg}
        placeholder="The owner of this number is in an emergency and needs your help!!"
      />

      <Text style={styles.emailTitle}>Email</Text>
      <Text style={styles.emailText}>{auth().currentUser?.email}</Text>
      <Text style={styles.emerContactNum1SubText}>Emergency Contact NO.1</Text>
      <Text style={styles.emerContactNum2SubText}>Emergency Contact NO.2</Text>
      <Text style={styles.emerContactNum3SubText}>Emergency Contact NO.3</Text>
      <Text style={styles.emerHelpMsgSubText}>Emergency Help Message</Text>

      <View style={styles.saveButtonContainer}>
        <Button title="Save" onPress={saveButtonHandler} />
      </View>
      <TouchableOpacity onPress={signOutHandler} style={styles.signOutButton}>
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

  emailTitle: {
    fontSize: 13,
    fontWeight: 'normal',
    position: 'absolute',
    left: 25,
    top: 65,
  },

  emailText: {
    fontSize: 13,
    fontWeight: 'normal',
    position: 'absolute',
    right: 25,
    top: 65,
  },

  emerContactNum1SubText: {
    fontSize: 13,
    fontWeight: 'normal',
    position: 'absolute',
    left: 25,
    top: 105,
  },

  inputEmerContactNum1: {
    backgroundColor: COLOR_CONST,
    width: SCREEN_WIDTH / 2,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: 90,
    right: 15,
    flex: 1,
  },
  emerContactNum2SubText: {
    fontSize: 13,
    fontWeight: 'normal',
    position: 'absolute',
    left: 25,
    top: 145,
  },

  inputEmerContactNum2: {
    backgroundColor: COLOR_CONST,
    width: SCREEN_WIDTH / 2,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: 130,
    right: 15,
    flex: 1,
  },

  emerContactNum3SubText: {
    fontSize: 13,
    fontWeight: 'normal',
    position: 'absolute',
    left: 25,
    top: 185,
  },

  inputEmerContactNum3: {
    backgroundColor: COLOR_CONST,
    width: SCREEN_WIDTH / 2,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: 170,
    right: 15,
    flex: 1,
  },

  emerHelpMsgSubText: {
    fontSize: 20,
    fontWeight: 'normal',
    position: 'absolute',
    left: 25,
    top: 250,
  },

  emerHelpMsg: {
    backgroundColor: COLOR_CONST,
    color: 'grey',
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 50,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: 280,
    right: 15,
  },

  saveButtonContainer: {
    width: '20%',
    position: 'absolute',
    top: 15,
    left: 260,
  },

  signOutButton: {
    position: 'absolute',
    bottom: 100,
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
