// External changes to make:
// change in your manifest file: (android:windowSoftInputMode="adjustPan") for keyboardavoidingview to work

import React, { useState, useEffect } from 'react';
import {firebase} from '@react-native-firebase/database';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

// Ensure that input box are dynamically updated to screen size
const SCREEN_WIDTH = Dimensions.get('screen').width - 30;

// Constant value for easy change of all the input boxes
const BORDER_BOTTOM_WIDTH_CONST = 1;

// Constant value for first text location, subsequent texts are positioned according to this cornerstone text
const FIRSTTEXT_CONST = 80;

// Constant different values for easy change of all input boxes
const DIFFERENCE_CONST = 40;

// Constant color value for easy change of color scheme
const COLOR_CONST = 'aliceblue';

/**
 * Default function for generating MedicalInfo Screen
 * @module
 * @return {component} The Medical Info User Interface screen to be displayed
 */

export default function MedicalInfoUI() {
    // Declare a new state variable, for changing Blood Type
    const [bloodType, setBloodType] = useState(null);

    // Declare a new state variable, for changing Heart Condition
    const [heartCondition, setHeartCondition] = useState(null);
  
    // Declare a new state variable, for changing Asthma Condition
    const [asthma, setAsthma] = useState(null);
  
    // Declare a new state variable, for changing Allergy Condition
    const [allergy, setAllergy] = useState(null);
  
    // Declare a new state variable, for changing Drug Allergy Condition
    const [drugAllergies, setDrugAllergies] = useState(null);
  
    // Declare a new state variable, for changing Health Condition Details
    const [heartConditionDetails, setHeartConditionDetails] = useState(null);
  
    // Declare a new state variable, for changing Health Conditions
    const [otherHealthCondition, setOtherHealthCondition] = useState(null);

    // Get userId
    const user = firebase.auth().currentUser;
    if (user) {
      console.log('uid: ', user.uid);
    } else {
      console.log('fail to get user id')
    }
    
    // Refer to firebase realtime database
    const databaseRef = firebase
        .app()
        .database('https://healthapp2-388fc-default-rtdb.asia-southeast1.firebasedatabase.app/')
        .ref('/MedicalInfo/' + user.uid)

    // Read medical info of the current user
    useEffect(() => {      
        databaseRef
            .once('value')
            .then(snapshot => {
              let info = snapshot.val();
                if (info != null) {
                  setBloodType(info.bloodType);
                  setHeartCondition(info.heartCondition)
                  setAsthma(info.asthma);
                  setAllergy(info.allergy);
                  setDrugAllergies(info.drugAllergy);
                  setHeartConditionDetails(info.heartConditionDetails);
                  setOtherHealthCondition(info.otherHealthCondition);
                }
            });
    }, []);

  /**
   * Declare a const 'save' function, to save the information keyed in the MedicalInfo UI input boxes
   * @property {string} bloodType             - user info blood type
   * @property {string} heartConditionDetails - user info heart condition details
   * @property {string} allergy               - user info allergy
   * @property {string} drugAllergy           - user info drug allergy
   * @property {string} heartCondition        - user info heart condition
   * @property {string} asthma                - user info asthma
   * @property {string} otherHealthCondition  - user info other health conditions
  */
  const saveButtonHandler = async () => {
    let info = {
        bloodType: bloodType,
        heartConditionDetails: heartConditionDetails,
        allergy: allergy,
        drugAllergy: drugAllergies,
        heartCondition: heartCondition,
        asthma: asthma,
        otherHealthCondition: otherHealthCondition,
    }
    console.log(allergy);

    databaseRef
        .update(info)
        .then(() => console.log('Medical Info updated.'));
  }


  return (
    // KeyboardAvoidingView to prevent input boxes from being blocked when keyboard comes up
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* TextInput for user to enter their blood type */}
      <TextInput
        style={styles.inputBloodType}
        textAlign="center"
        placeholder="Enter your blood type"
        onChangeText={(text) => setBloodType(text)}
        value={bloodType}
      />
      {/* TextInput for user to enter their allergies */}
      <TextInput
        style={styles.inputAllergies}
        textAlign="center"
        placeholder="Allergies"
        onChangeText={(text) => {
          setAllergy(text);
        }}
        value={allergy}
      />
      {/* TextInput for user to enter their drug allergies */}
      <TextInput
        style={styles.inputDrugAllergies}
        textAlign="center"
        placeholder="Drug Allergies"
        onChangeText={(text) => setDrugAllergies(text)}
        value={drugAllergies}
      />
      {/* TextInput for user to enter their heart condition */}
      <TextInput
        style={styles.inputHeartCondition}
        textAlign="center"
        onChangeText={(text) => setHeartCondition(text)}
        value={heartCondition}
        placeholder="No"
      />
      {/* Text style for Asthma text */}
      <Text style={styles.asthmaSubText}>Asthma</Text>
      {/* TextInput for user to enter their asthma condition */}
      <TextInput
        style={styles.inputAsthma}
        textAlign="center"
        onChangeText={(text) => setAsthma(text)}
        value={asthma}
        placeholder="No"
      />
      {/* // TextInput for user to enter their heart condition details */}
      <TextInput
        style={styles.inputHeartConditionDetails}
        textAlign="left"
        onChangeText={(text) => setHeartConditionDetails(text)}
        value={heartConditionDetails}
        placeholder="Heart condition details"
      />
      {/* // TextInput for user to enter other heart conditions */}
      <TextInput
        style={styles.otherHealthCondition}
        textAlign="left"
        onChangeText={(text) => setOtherHealthCondition(text)}
        value={otherHealthCondition}
        placeholder="Other Health Conditions"
      />
      {/* // Text style to display Blood Type sub text */}
      <Text style={styles.bloodTypeSubText}>Blood Type</Text>
      {/* // Text style to display Allergy text */}
      <Text style={styles.allergySubText}>Allergy</Text>
      {/* // Text style to display Drug Allergy text */}
      <Text style={styles.drugAllergySubText}>Drug Allergy</Text>
      {/* // Text style to display Heart Condition sub text */}
      <Text style={styles.heartConditionSubText}>Heart Condition (HC)</Text>
      {/* // Text style to display Heart Condition Details sub text */}
      <Text style={styles.heartConditionDetails}>HC details</Text>
      {/* // Text style to display Other Health Condition Details sub text */}
      <Text style={styles.otherHealthConditionSubText}>Other Health Conditions</Text>
      {/* // View style to display save button container (uses default icon provided
      by Android/IOS) */}
      <View style={styles.saveButtonContainer}>
        <Button title="Save" onPress={saveButtonHandler} />
      </View>
    </KeyboardAvoidingView>
  );
}

// Store different const styles for creation of different items
const styles = StyleSheet.create({
  // General container for whole screen
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // backButton style
  backButton: {
    flex: 1,
    resizeMode: 'contain',
    top: 50,
    left: 20,
    position: 'absolute',
  },

  // titleText style (Text output for MedicalInfo)
  // titleText: {
  //   fontSize: 35,
  //   fontWeight: 'bold',
  //   color: 'darkblue',
  //   position: 'absolute',
  //   top: FIRSTTEXT_CONST-120,
  // },

  // bloodTypeSubText style (Text output for Blood Type)
  bloodTypeSubText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST - 25
  },

  // inputBloodType style (Text input for blood type)
  inputBloodType: {
    backgroundColor: COLOR_CONST,
    width: SCREEN_WIDTH/1.8,
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: 'black',
    borderRadius: 5,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST - 40,
    right: 15,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // allergySubText style (Text output for allergies)
  allergySubText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST -25 + DIFFERENCE_CONST*1.4,
  },

  // inputAllergies style (Text input for allergies)
  inputAllergies: {
    backgroundColor: COLOR_CONST,
    color: 'black',
    fontSize: 15,
    width: SCREEN_WIDTH/1.8,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 5,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST -30 + DIFFERENCE_CONST*1.2,
    right: 15,
    flex: 1,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // drugAllergySubText style (Text output for drug allergies)
  drugAllergySubText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST - 25 + DIFFERENCE_CONST*2.8,
  },

  // inputDrugAllergies (Text input for drug allergies)
  inputDrugAllergies: {
    backgroundColor: COLOR_CONST,
    color: 'black',
    fontSize: 15,
    width: SCREEN_WIDTH/1.8,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 5,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST -25 + DIFFERENCE_CONST * 2.4,
    right: 15,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // heartConditionSubText (Text output for Heart Condition)
  heartConditionSubText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST - 25 + DIFFERENCE_CONST * 4.2,
  },

  // inputHeartCondition (Text input for Heart Condition)
  inputHeartCondition: {
    backgroundColor: COLOR_CONST,
    paddingHorizontal: 25,
    color: "black",
    fontSize: 15,
    paddingVertical: 7,
    borderRadius: 5,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST - 25 + DIFFERENCE_CONST * 3.8,
    right: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // heartConditionDetails (Text output for Heart Condition Details)
  heartConditionDetails: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST - 25 + DIFFERENCE_CONST*7,
  },
  // inputHeartConditionDetails (Text input for Heart Condition)
  inputHeartConditionDetails: {
    backgroundColor: COLOR_CONST,
    width: SCREEN_WIDTH-15,
    color: "black",
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 5,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST - 25+ DIFFERENCE_CONST * 7.7,
    right: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // asthmaSubText (Text output for Asthma)
  asthmaSubText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST - 25 + DIFFERENCE_CONST *5.6,
  },

  // inputAsthma (Text input for Asthma)
  inputAsthma: {
    backgroundColor: COLOR_CONST,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 5,
    color: "black",
    fontSize: 15,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST - 25 + DIFFERENCE_CONST * 5.2,
    right: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // otherHealthConditionSubText (Text output for other Health Condition)
  otherHealthConditionSubText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST - 25+ DIFFERENCE_CONST *10.4,
  },

  // otherHealthCondition (Text output for Other Health Condition)
  otherHealthCondition: {
    backgroundColor: COLOR_CONST,
    width: SCREEN_WIDTH-15,
    color: "black",
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 5,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST - 25+ DIFFERENCE_CONST * 11.2,
    right: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // saveButtonContainer style (save button)
  saveButtonContainer: {
    width: '20%',
    position: 'absolute',
    bottom: 30,
    left: 280,
  },
});
