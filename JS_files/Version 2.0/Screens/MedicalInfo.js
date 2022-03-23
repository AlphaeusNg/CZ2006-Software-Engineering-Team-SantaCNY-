import React from 'react';
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
} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('screen').width - 30;
const BORDER_BOTTOM_WIDTH_CONST = 1;
const FIRSTTEXT_CONST = 230;
const DIFFERENCE_CONST = 40;
const COLOR_CONST = 'aliceblue'; 
export default function MedicalInfoUI() {
  const [inputBloodType_text, onChangeBloodType_text] = React.useState(null);
  const [inputHeartCondition_text, onChangeHeartCondition_text] = React.useState(null);
  const [inputAsthma_text, onChangeAsthma_text] = React.useState(null);
  const [inputAllergy_text, onChangeAllergy_text] = React.useState(null);
  const [inputDrugAllergiesy_text, onChangeDrugAllergies_text] = React.useState(null);
  const [inputHealthConditionDetails_text, onChangeHeartConditionDetails_text] = React.useState(null);
  const [inputotherHealthCondition_text, onChangeotherHealthCondition_text] = React.useState(null);
  

  return (
      <SafeAreaView style={styles.container}>
      <TextInput
          style={styles.inputBloodType} textAlign='right'
          placeholder="Enter your blood type"
          keyboardType="alphanumeric"
          onChangeBloodType_text={onChangeBloodType_text}
          value={inputBloodType_text}          
        />
      <TextInput
        style={styles.inputAllergies} textAlign='left'
        placeholder="Allergies"
        keyboardType='alphanumeric'
        onChangeAllergy_text={onChangeAllergy_text}
        value={inputAllergy_text}
        />
        <TextInput
        style={styles.inputDrugAllergies} textAlign='left'
        placeholder="Drug Allergies"
        keyboardType='alphanumeric'
        onChangeDrugAllergies_text={onChangeDrugAllergies_text}
        value={inputDrugAllergiesy_text}
        />

        <TextInput
          style={styles.inputHeartCondition} textAlign='right'
          onChangeHeartCondition_text={onChangeHeartCondition_text}
          value={inputHeartCondition_text}
          placeholder="No"
          keyboardType="alphanumeric"
        />
        <TextInput
          style={styles.inputAsthma} textAlign='right'
          onChangeAsthma_text={onChangeAsthma_text}
          value={inputAsthma_text}
          placeholder="No"
          keyboardType="alphanumeric"
        />
        <TextInput
          style={styles.inputHeartConditionDetails} textAlign='left'
          onChangeHeartConditionDetails_text={onChangeHeartConditionDetails_text}
          value={inputHealthConditionDetails_text}
          placeholder="Heart condition details"
          keyboardType="alphanumeric"
        />
        <TextInput
          style={styles.otherHealthCondition} textAlign='left'
          onChangeotherHealthCondition_text={onChangeotherHealthCondition_text}
          value={inputotherHealthCondition_text}
          placeholder="Other Health Conditions"
          keyboardType="alphanumeric"
        />
        <Text style={styles.titleText}>Medical Info</Text>
        <Text style={styles.bloodTypeSubText}>Blood Type</Text>
        <Text style={styles.heartConditionSubText}>Heart Condition</Text>
        <Text style={styles.asthmaSubText}>Asthma</Text>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('./assets/backButtonIcon.png')} />
        </TouchableOpacity>
        <View style = {styles.saveButtonContainer}>
          <TouchableOpacity style = {[styles.button,styles.buttonOutline]}>
            <Text style ={styles.buttonOutlineText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: { 
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    top: 50,
    left: 20,
    position: 'absolute',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'italic',
    position: "absolute",
    top: FIRSTTEXT_CONST-120,
  },
  bloodTypeSubText: {
    fontSize: 23,
    fontWeight: "normal",
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST,
  },
  inputBloodType:{
        backgroundColor: COLOR_CONST,
        paddingHorizontal:25,
        paddingVertical:7,
        borderRadius:20,
        marginTop:5,
        position: 'absolute',
        top: FIRSTTEXT_CONST-10,
        right: 15,
        borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },
  inputAllergies:{
        backgroundColor:'white',
        color: 'grey',
        width: SCREEN_WIDTH,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:20,
        marginTop:5,
        position: 'absolute',
        top: FIRSTTEXT_CONST + DIFFERENCE_CONST,
        left: 15,
        fontSize: 20,
        flex: 1,
        borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },
  inputDrugAllergies:{
        backgroundColor:'white',
        color: 'grey',
        width: SCREEN_WIDTH,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:20,
        marginTop:5,
        position: 'absolute',
        top: FIRSTTEXT_CONST + DIFFERENCE_CONST*2.5,
        left: 15,
        fontSize: 20,
        borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },
  heartConditionSubText: {
    fontSize: 22,
    fontWeight: "normal",
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST*4.5,
  },
  asthmaSubText: {
    fontSize: 23,
    fontWeight: "normal",
    position: 'absolute',
    left: 25,
    top: FIRSTTEXT_CONST + DIFFERENCE_CONST*7.5,
  },
  inputAsthma:{
        backgroundColor:COLOR_CONST,
        paddingHorizontal:25,
        paddingVertical:7,
        borderRadius:20,
        marginTop:5,
        position: 'absolute',
        top: FIRSTTEXT_CONST + DIFFERENCE_CONST*7.5 - 10,
        right: 20,
        borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },  
  inputHeartCondition:{
        backgroundColor:COLOR_CONST,
        paddingHorizontal:25,
        paddingVertical:7,
        borderRadius:20,
        marginTop:5,
        position: 'absolute',
        top: FIRSTTEXT_CONST + DIFFERENCE_CONST*4.5 - 12,
        right: 20,
        
        borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },
  inputHeartConditionDetails:{
        backgroundColor:'white',
        width: SCREEN_WIDTH,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:20,
        marginTop:5,
        position: 'absolute',
        top: FIRSTTEXT_CONST + DIFFERENCE_CONST*5.5,
        left: 15,
        fontSize: 20,
        borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },
  otherHealthCondition:{
        backgroundColor:'white',
        color: 'grey',
        width: SCREEN_WIDTH,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:20,
        marginTop:5,
        position: 'absolute',
        top: FIRSTTEXT_CONST + DIFFERENCE_CONST*8.5,
        left: 15,
        fontSize: 20,
        borderBottomWidth: BORDER_BOTTOM_WIDTH_CONST,
  },
  saveButtonContainer:{
        width:'65%',
        position: 'absolute',
        bottom: 30,
        left: 250
    },
   button:{
        width:'35%',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
    },
    buttonOutline:{
        backgroundColor:'lightskyblue',
        borderWidth:BORDER_BOTTOM_WIDTH_CONST,
        alignItems: 'center',
    },
    buttonOutlineText:{
        fontWeight:'700',
        fontStyle: 'italic',
        fontSize:20,   
    },
});
