// External changes to make:
// change in your manifest file: (android:windowSoftInputMode="adjustPan") for keyboardavoidingview to work

import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { useNavigation } from '@react-navigation/native';

// Import relevant tools from react-native
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

// Ensure that input box are dynamically updated to screen size
const SCREEN_WIDTH = Dimensions.get('screen').width - 30;

// Constant value for easy change of all the input boxes
const BORDER_BOTTOM_WIDTH_CONST = 1;

// Constant value for first text location, subsequent texts are positioned according to this cornerstone text
const FIRSTTEXT_CONST = 230;

// Constant different values for easy change of all input boxes
const DIFFERENCE_CONST = 40;

// Constant color value for easy change of color scheme
const COLOR_CONST = 'aliceblue';

/**
 * Default function for MedicalInfo Screen
 * @return {component} The Medical Info User Interface screen to be displayed
 */
export default function MedicalInfoUI() {

  // Declare a const function, to save the information keyed in the MedicalInfo UI input boxes
  const save = () =>{
    // to be updated
  }

  // Declare a const function, upon pressing the back button, return to main menu screen
  const back = () =>{
    // navigation.navigate("Main Menu");
  }
  // Declare a new state variable, for changing Blood Type
  const [inputBloodType_text, onChangeBloodType_text] = React.useState(null);

  // Declare a new state variable, for changing Heart Condition
  const [inputHeartCondition_text, onChangeHeartCondition_text] =
    React.useState(null);

  // Declare a new state variable, for changing Asthma Condition
  const [inputAsthma_text, onChangeAsthma_text] = React.useState(null);

  // Declare a new state variable, for changing Allergy Condition
  const [inputAllergy_text, onChangeAllergy_text] = React.useState(null);

  // Declare a new state variable, for changing Drug Allergy Condition
  const [inputDrugAllergiesy_text, onChangeDrugAllergies_text] =
    React.useState(null);

  // Declare a new state variable, for changing Health Condition Details
  const [inputHealthConditionDetails_text, onChangeHeartConditionDetails_text] =
    React.useState(null);

  // Declare a new state variable, for changing Health Conditions
  const [inputotherHealthCondition_text, onChangeotherHealthCondition_text] =
    React.useState(null);

  return (
    // KeyboardAvoidingView to prevent input boxes from being blocked when keyboard comes up
    <KeyboardAvoidingView
      style = {styles.container}
      behavior="padding"
    >
      // TouchableOpacity to highlight a 'touch' feel when back button is being pressed
      <TouchableOpacity style={styles.backButton}>

        // To retrieve icon.png from assets folder
        <Image source={require('./assets/backButtonIcon.png')} onPress={() => back}/>

      </TouchableOpacity>

      // TextInput for user to enter their blood type
      <TextInput
        style={styles.inputBloodType}
        textAlign="center"
        placeholder="Enter your blood type"
        keyboardType="alphanumeric"
        onChangeBloodType_text={onChangeBloodType_text}
        value={inputBloodType_text}
      />
      // TextInput for user to enter their allergies
      <TextInput
        style={styles.inputAllergies}
        textAlign="left"
        placeholder="Allergies"
        keyboardType="alphanumeric"
        onChangeAllergy_text={onChangeAllergy_text}
        value={inputAllergy_text}
      />
      // TextInput for user to enter their drug allergies
      <TextInput
        style={styles.inputDrugAllergies}
        textAlign="left"
        placeholder="Drug Allergies"
        keyboardType="alphanumeric"
        onChangeDrugAllergies_text={onChangeDrugAllergies_text}
        value={inputDrugAllergiesy_text}
      />
      // TextInput for user to enter their heart condition
      <TextInput
        style={styles.inputHeartCondition}
        textAlign="center"
        onChangeHeartCondition_text={onChangeHeartCondition_text}
        value={inputHeartCondition_text}
        placeholder="No"
        keyboardType="alphanumeric"
      />
      // Text style for Asthma text
      <Text style={styles.asthmaSubText}>Asthma</Text>
      // TextInput for user to enter their asthma condition
      <TextInput
        style={styles.inputAsthma}
        textAlign="center"
        onChangeAsthma_text={onChangeAsthma_text}
        value={inputAsthma_text}
        placeholder="No"
        keyboardType="alphanumeric"
      />
      // TextInput for user to enter their heart condition details
      <TextInput
        style={styles.inputHeartConditionDetails}
        textAlign="left"
        onChangeHeartConditionDetails_text={onChangeHeartConditionDetails_text}
        value={inputHealthConditionDetails_text}
        placeholder="Heart condition details"
        keyboardType="alphanumeric"
      />
      // TextInput for user to enter other heart conditions
      <TextInput
        style={styles.otherHealthCondition}
        textAlign="left"
        onChangeotherHealthCondition_text={onChangeotherHealthCondition_text}
        value={inputotherHealthCondition_text}
        placeholder="Other Health Conditions"
        keyboardType="alphanumeric"
      />
      // Text style to display Medical Info title text
      <Text style={styles.titleText}>Medical Info</Text>

      // Text style to display Blood Type sub text
      <Text style={styles.bloodTypeSubText}>Blood Type</Text>
      
      // Text style to display Heart Condition sub text
      <Text style={styles.heartConditionSubText}>Heart Condition</Text>

      // View style to display save button container (uses default icon provided by Android/IOS)
      <View style={styles.saveButtonContainer}>
        <Button title="Save" onPress={() => save} />
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
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'darkblue',
    position: 'absolute',
    top: FIRSTTEXT_CONST - 120,
  },

  // bloodTypeSubText style (Text output for Blood Type)
  bloodTypeSubText: {
    fontSize: 23,
    fontWeight: 'normal',
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST,
  },

  // inputBloodType style (Text input for blood type)
  inputBloodType: {
    backgroundColor: COLOR_CONST,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST - 10,
    right: 15,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // inputAllergies style (Text input for allergies)
  inputAllergies: {
    backgroundColor: 'white',
    color: 'grey',
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST,
    left: 15,
    fontSize: 20,
    flex: 1,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // inputDrugAllergies (Text input for drug allergies)
  inputDrugAllergies: {
    backgroundColor: 'white',
    color: 'grey',
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST * 2.5,
    left: 15,
    fontSize: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // heartConditionSubText (Text output for Heart Condition)
  heartConditionSubText: {
    fontSize: 22,
    fontWeight: 'normal',
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST * 4.5,
  },

  // heartCondition (Text input for Heart Condition)
  inputHeartCondition: {
    backgroundColor: COLOR_CONST,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST * 4.5 - 12,
    right: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },
  
  // inputHeartConditionDetails (Text input for Heart Condition)
  inputHeartConditionDetails: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST * 5.5,
    left: 15,
    fontSize: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // asthmaSubText (Text output for Asthma)
  asthmaSubText: {
    fontSize: 23,
    fontWeight: 'normal',
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST * 7.5,
  },

  // inputAsthma (Text input for Asthma)
  inputAsthma: {
    backgroundColor: COLOR_CONST,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST * 7.5 - 10,
    right: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // otherHealthCondition (Text output for Other Health Condition)
  otherHealthCondition: {
    backgroundColor: 'white',
    color: 'grey',
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 5,
    position: 'absolute',
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST * 8.5,
    left: 15,
    fontSize: 20,
    borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },

  // saveButtonContainer style (save button)
  saveButtonContainer: {
    width: '20%',
    position: 'absolute',
    bottom: 30,
    left: 260,
  },
});
