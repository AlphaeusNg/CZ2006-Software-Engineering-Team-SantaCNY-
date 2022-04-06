import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image, ScrollView, StyleSheet, Dimensions,TouchableOpacity ,styles} from "react-native";
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

// import {
//     useFonts,
// 	Comfortaa_400Regular,
// 	Roboto_400Regular
// } from "@expo-google-fonts/dev";

/**
 * Default function for generating ResetPassword Screen
 * @module
 * @return {component} The ResetPassword User Interface screen to be displayed
 */
export default function ResetPassword (){
	// Declare a new state variable, for setting Email
    const [Email, setEmail] = useState('')
    const navigation = useNavigation()
    const forgotPassword = () => {
      auth().sendPasswordResetEmail(Email)
        .then(() => {
					alert('The password reset link is sent to your email!');
        })
        .catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage);
        });
      navigation.navigate("Login");
    };

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Login_Page}>
			<View style = {stylesheet._Register}>
				<View style = {[stylesheet._Reset_Password, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Reset_Password, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", width: "100%"}]} numberOfLines={1}>
					Reset Password
				</Text>
				</View>
			</View>
			<View style = {stylesheet._Component}>
				<View style = {[stylesheet._Enter_your_registered_phone_number_or_email_address, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Enter_your_registered_phone_number_or_email_address, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Enter your registered phone number or email address
				</Text>
				</View>
			</View>
			<View style = {stylesheet._Component_2}>
				<View style = {stylesheet._Rectangle_2}>
				</View>
				<View style = {[stylesheet._Phone_Number, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
                <TextInput
                    placeholder = "Phone/Email"
                    value = {Email}
                    onChangeText = {text => setEmail(text)}
                    style = {stylesheet._Phone_Number}
                />
				</View>
			</View>
			<View style = {stylesheet._Button}>
				<View style = {stylesheet._Rectangle_2_2}>
				</View>
				<View style = {[stylesheet._next, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
          <TouchableOpacity  onPress={forgotPassword}
                    style = {stylesheet.__Button}>
				<Text style = {[stylesheet._next, {position: "relative", left: -8, top: -10, height: "auto"}]}>
					Reset Now
				</Text>
          </TouchableOpacity>
				</View>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	//_Login_Page(Styling for loginpage)
	_Login_Page: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	//_Register style(Styling of register)
	_Register: {
		position: "absolute",
		width: '100%',
		height: 40,
		borderRadius: 0,
		left: 16,
		right: "auto",
		top: 104,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	//_Reset_Password(Styling for reset password)
	_Reset_Password: {
		position: "absolute",
		width: "80%",
		height: "150%",
		left: 0,
		right: "auto",
		fontFamily: "Comfortaa",
		fontWeight: 'bold',
		textDecorationLine: "none",
		fontSize: 36,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	//Component style(Styling for Component)
	_Component: {
		position: "absolute",
		width: "auto",
		height: 52,
		borderRadius: 0,
		left: 16,
		right: 16,
		top: 176,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	//_Enter_your_registered_phone_number_or_email_address style(Styling for entering phonenumber/Email)
	_Enter_your_registered_phone_number_or_email_address: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 5,
		right: "auto",
		top: "50%",
		transform: [
			{translateX: 0},
			{translateY: -21},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 'normal',
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	//Component_2 style (styling for phone/email output)
	_Component_2: {
		position: "absolute",
		width: "auto",
		height: 52,
		borderRadius: 0,
		left: 16,
		right: 30,
		top: 244,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	//_Rectangle_2 style (Box for phone/email output)
	_Rectangle_2: {
		position: "absolute",
		width: 328,
		height: 52,
		borderRadius: 0,
		opacity: 1,
		borderWidth: 2,
		borderColor: "rgba(0, 0, 0, 1)",
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	//_Phone_Number style (Text output for phone number/email)
	_Phone_Number: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 17,
		right: "auto",
		top: "50%",
		transform: [
			{translateX: 0},
			{translateY: -9},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 'normal',
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(0, 0, 0, 0.5)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	//_Button style (Styling for next button)
	_Button: {
		position: "absolute",
		width: "auto",
		height: 52,
		borderRadius: 0,
		left: 15,
		right: 17,
		top: 312,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	//_Rectangle_2_2 style (Styling for next button)
	_Rectangle_2_2: {
		position: "absolute",
		width: 328,
		height: 52,
		borderRadius: 6,
		opacity: 1,
		borderWidth: 2,
		borderColor: "rgba(0, 0, 0, 1)",
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0, 0, 0, 1)",
	},
	//_next style (Text Output for next button)
	_next: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		top: "50%",
		transform: [
			{translateX: -18.71258544921875},
			{translateY: -7},
			{rotate: "0deg"},
		],
		fontFamily: "Roboto",
		fontWeight: 'normal',
		textDecorationLine: "none",
		fontSize: 32,
		color: "white",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	//_Auto_Layout_Horizontal style (Setting layout)
	_Auto_Layout_Horizontal: {
		position: "absolute",
		width: 36,
		height: 36,
		borderRadius: 9.818181991577148,
		left: 23,
		right: "auto",
		top: 40,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)",
		paddingTop: 8.181818008422852,
		paddingLeft: 8.181818008422852,
		paddingRight: 8.181818008422852,
		paddingBottom: 8.181818008422852,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	_Navigation___arrow_back_ios: {
		position: "relative",
		width: 20,
		height: 20,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
	},
	_Frame: {
	},
  
	//_Rectangle (Styling for rectangle (not really used))
	_Rectangle: {
		position: "absolute",
		width: 20.370370864868164,
		height: 20.370370864868164,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(41, 114, 254, 1)",
	},
});