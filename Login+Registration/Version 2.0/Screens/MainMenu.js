import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';

import {
useFonts, 
Comfortaa_400Regular,
SourceSansPro_400Regular
} from "@expo-google-fonts/dev";

export default function App (){

	let [fontsLoaded] = useFonts({
		Comfortaa_400Regular,
        SourceSansPro_400Regular
	});
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Main_Menu_Page}>
			<Component__StatusBar___iPhone_6__7__8__SE
				variant="variant2"
				variant2_text1={"5:00 PM"}
				variant2_text2={"100%"}
				variant2_text3={"Santa"}
				variant2_position={"absolute"}
				variant2_width={360}
				variant2_height={20}
				variant2_left={0}
				variant2_right={"auto"}
				variant2_top={0}
				variant2_bottom={"auto"}
				variant2_transform={[{translateX: 0},{translateY: 0},{rotate: "0deg"},]}
			/>
			<View style = {stylesheet._Auto_Layout_Horizontal}>
				<View style = {stylesheet._Navigation___arrow_back_ios}>
					<View style = {stylesheet._Frame}>
					</View>
					<View style = {stylesheet._Rectangle}>
					</View>
				</View>
			</View>
			<View style = {[stylesheet._Main_Menu, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Main_Menu, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Main Menu
			</Text>
			</View>
			<View style = {stylesheet._Auto_Layout_Horizontal_2}>
				<View style = {stylesheet._Auto_Layout_Vertical}>
					<View style = {stylesheet._Auto_Layout_Horizontal_3}>
						<View style = {stylesheet._Image___edit}>
							<View style = {stylesheet._Frame_2}>
							</View>
							<View style = {stylesheet._Rectangle_2}>
							</View>
						</View>
					</View>
					<View style = {[stylesheet._Medical_Info, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._Medical_Info, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						Medical Info
					</Text>
					</View>
				</View>
			</View>
			<View style = {stylesheet._Auto_Layout_Horizontal_4}>
				<View style = {stylesheet._Auto_Layout_Vertical_2}>
					<View style = {stylesheet._Auto_Layout_Horizontal_5}>
						<View style = {stylesheet._Action___supervisor_account}>
							<View style = {stylesheet._Frame_3}>
							</View>
							<View style = {stylesheet._Rectangle_3}>
							</View>
						</View>
					</View>
					<View style = {[stylesheet._Profile, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._Profile, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						Profile
					</Text>
					</View>
				</View>
				<View style = {stylesheet._Auto_Layout_Vertical_3}>
					<View style = {stylesheet._Auto_Layout_Horizontal_6}>
						<View style = {stylesheet._Hardware___headset}>
							<Svg style = {stylesheet._Vector} fill = {undefined}>
							<Path fillRule = {"nonzero"} d = {"M 11.199999491373697 0.026002896981370933 C 4.826665878295898 0.4393362438671901 0 6.026003670930732 0 12.412670447023176 L 0 21.332670111402592 C 0 23.546003455779925 1.7866667111714682 25.332670211791992 4 25.332670211791992 L 5.333333333333333 25.332670211791992 C 6.800000031789144 25.332670211791992 8 24.132670213464316 8 22.66600347819906 L 8 17.332670011013192 C 8 15.866003275747934 6.800000031789144 14.666003277420257 5.333333333333333 14.666003277420257 L 2.6666666666666665 14.666003277420257 L 2.6666666666666665 12.386003169335668 C 2.6666666666666665 7.266003155278156 6.613333384195963 2.812669645804939 11.71999994913737 2.6660029762520563 C 17.013333320617676 2.5193363066991736 21.333333333333332 6.746003002355297 21.333333333333332 11.999336543827324 L 21.333333333333332 14.666003277420257 L 18.666666666666664 14.666003277420257 C 17.199999968210854 14.666003277420257 16 15.866003275747934 16 17.332670011013192 L 16 22.66600347819906 C 16 24.132670213464316 17.199999968210854 25.332670211791992 18.666666666666664 25.332670211791992 L 20 25.332670211791992 C 22.213333288828533 25.332670211791992 24 23.546003455779925 24 21.332670111402592 L 24 11.999336543827324 C 24 5.1060029357643275 18.186665852864582 -0.4273304524977995 11.199999491373697 0.026002896981370933 Z"} />
							</Svg>
							<View style = {stylesheet._Rectangle_4}>
							</View>
						</View>
					</View>
					<View style = {[stylesheet._Advisories_and_Guides, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._Advisories_and_Guides, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						Advisories and Guides
					</Text>
					</View>
				</View>
			</View>
			<View style = {stylesheet._Auto_Layout_Horizontal_7}>
				<View style = {stylesheet._Auto_Layout_Vertical_4}>
					<View style = {stylesheet._Group}>
						<View style = {stylesheet._Group_2}>
							<Svg style = {stylesheet._Vector_2} fill = {"rgba(0,0,0,0)"}>
							<Path fillRule = {"nonzero"} d = {"M 14.284003257751465 38.448001861572266 C 10.976060390472412 37.4603516459465 7.980183839797974 35.63305926322937 5.588003158569336 33.14400100708008 C 6.3576770424842834 32.23112231492996 6.837471634149551 31.10935413837433 6.965991973876953 29.922245025634766 C 7.094512313604355 28.735135912895203 6.865912199020386 27.53667962551117 6.309444427490234 26.480228424072266 C 5.752976655960083 25.423777222633362 4.8939512968063354 24.5573832988739 3.8422904014587402 23.991914749145508 C 2.790629506111145 23.426446199417114 1.5941661596298218 23.187620870769024 0.40600287914276123 23.305999755859375 C 0.13531982898712158 21.980101346969604 -0.0007044467345167504 20.630246758461 0.0000027432836304797092 19.277000427246094 C 0.0000027432836304797092 17.187000513076782 0.32000261545181274 15.171000480651855 0.916002631187439 13.277000427246094 L 1.0000027418136597 13.277000427246094 C 2.019758939743042 13.277327568939654 3.0227726101875305 13.017740190029144 3.914336681365967 12.522748947143555 C 4.805900752544403 12.027757704257965 5.556593835353851 11.313696503639221 6.09553337097168 10.447990417480469 C 6.634472906589508 9.582284331321716 6.943874638527632 8.593500852584839 6.994523048400879 7.575003147125244 C 7.045171458274126 6.556505441665649 6.835395485162735 5.541904449462891 6.385003089904785 4.627000331878662 C 8.729593992233276 2.4438233375549316 11.565060377120972 0.8568263649940491 14.652003288269043 0 C 15.154381036758423 0.9864019751548767 15.919846951961517 1.8145968914031982 16.863710403442383 2.392951488494873 C 17.80757385492325 2.971306085586548 18.893036603927612 3.277273072861135 20.000001907348633 3.2769999504089355 C 21.106967210769653 3.277273072861135 22.192429959774017 2.971306085586548 23.136293411254883 2.392951488494873 C 24.08015686273575 1.8145968914031982 24.84562373161316 0.9864019751548767 25.34800148010254 0 C 28.43494439125061 0.8568263649940491 31.27041459083557 2.4438233375549316 33.61500549316406 4.627000331878662 C 33.161327481269836 5.548311114311218 32.95171681046486 6.570647597312927 33.0062370300293 7.596154689788818 C 33.060757249593735 8.62166178226471 33.377581775188446 9.616011381149292 33.926387786865234 10.484025955200195 C 34.47519379854202 11.352040529251099 35.23760807514191 12.064664036035538 36.140655517578125 12.553686141967773 C 37.04370296001434 13.04270824790001 38.057154178619385 13.291759447194636 39.08400344848633 13.277000427246094 C 39.69295459985733 15.21871793270111 40.0018480012659 17.242034912109375 40.000003814697266 19.277000427246094 C 40.00000381469727 20.657000422477722 39.8600055873394 22.00499975681305 39.5940055847168 23.305999755859375 C 38.405842304229736 23.187620870769024 37.209375739097595 23.426446199417114 36.15771484375 23.991914749145508 C 35.106053948402405 24.5573832988739 34.24703097343445 25.423777222633362 33.6905632019043 26.480228424072266 C 33.134095430374146 27.53667962551117 32.905495315790176 28.735135912895203 33.03401565551758 29.922245025634766 C 33.16253599524498 31.10935413837433 33.642328679561615 32.23112231492996 34.41200256347656 33.14400100708008 C 32.019821882247925 35.63305926322937 29.02394437789917 37.4603516459465 25.716001510620117 38.448001861572266 C 25.327553927898407 37.23729658126831 24.56471347808838 36.181197226047516 23.537433624267578 35.43193435668945 C 22.510153770446777 34.68267148733139 21.271496534347534 34.27894592285156 20.000001907348633 34.27894592285156 C 18.72850728034973 34.27894592285156 17.48985004425049 34.68267148733139 16.462570190429688 35.43193435668945 C 15.435290336608887 36.181197226047516 14.672450840473175 37.23729658126831 14.284003257751465 38.448001861572266 Z"}   strokeLinejoin = {"round"}  strokeWidth = {4}  stroke = {"rgba(133, 182, 255, 1)"}/>
							</Svg>
							<Svg style = {stylesheet._Vector_3} fill = {"rgba(0,0,0,0)"}>
							<Path fillRule = {"nonzero"} d = {"M 7 14 C 7.91925311088562 14.00000001937181 8.829504251480103 13.818940281867981 9.678783416748047 13.467157363891602 C 10.528062582015991 13.115374445915222 11.299736976623535 12.599757194519043 11.949747085571289 11.949747085571289 C 12.599757194519043 11.299736976623535 13.1153744161129 10.528062522411346 13.467157363891602 9.678783416748047 C 13.818940311670303 8.829504311084747 14 7.91925311088562 14 7 C 14 6.08074688911438 13.818940311670303 5.170495688915253 13.467157363891602 4.321216583251953 C 13.1153744161129 3.4719374775886536 12.599757194519043 2.700263023376465 11.949747085571289 2.050252914428711 C 11.299736976623535 1.400242805480957 10.528062582015991 0.8846255540847778 9.678783416748047 0.5328426361083984 C 8.829504251480103 0.18105971813201904 7.91925311088562 -1.9371807269408237e-8 7 3.552713678800501e-15 C 5.143484592437744 3.912314383569537e-8 3.3630075454711914 0.7374982833862305 2.050252914428711 2.050252914428711 C 0.7374982833862305 3.3630075454711914 3.552713678800501e-15 5.143484592437744 0 7 C 3.552713678800501e-15 8.856515407562256 0.7374982833862305 10.636992454528809 2.050252914428711 11.949747085571289 C 3.3630075454711914 13.26250171661377 5.143484592437744 13.99999996087686 7 14 L 7 14 Z"}   strokeLinejoin = {"round"}  strokeWidth = {4}  stroke = {"rgba(133, 182, 255, 1)"}/>
							</Svg>
						</View>
					</View>
					<View style = {[stylesheet._Settings, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._Settings, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						 Settings
					</Text>
					</View>
				</View>
				<View style = {stylesheet._Auto_Layout_Vertical_5}>
					<Image style = {stylesheet._AED_Image_blue} source = {{uri: imageUrl_AED_Image_blue}}>
					</Image>
					<View style = {[stylesheet._View_Nearby_AED, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._View_Nearby_AED, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						View Nearby AED
					</Text>
					</View>
				</View>
			</View>
			<View style = {stylesheet._Auto_Layout_Horizontal_8}>
				<View style = {stylesheet._Auto_Layout_Vertical_6}>
					<View style = {stylesheet._Auto_Layout_Horizontal_9}>
						<View style = {stylesheet._Image___music_note}>
							<View style = {stylesheet._Frame_4}>
							</View>
							<View style = {stylesheet._Rectangle_5}>
							</View>
						</View>
					</View>
					<View style = {[stylesheet._Emergency_Response, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[stylesheet._Emergency_Response, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						Emergency Response
					</Text>
					</View>
				</View>
			</View>
		</View>
		</ScrollView>
	)
}
}
const Component__StatusBar___iPhone_6__7__8__SE = ({
	variant,
	variant2_position,
	variant2_width,
	variant2_height,
	variant2_left,
	variant2_right,
	variant2_top,
	variant2_bottom,
	variant2_transform,
	variant1_text1,
	variant1_text2,
	variant1_text3,
	variant2_text1,
	variant2_text2,
	variant2_text3,
	variant3_text1,
	variant3_text2,
	variant3_text3,
	variant4_text1,
	variant4_text2,
	variant4_text3,
}) => {
	if (variant === "variant1"){
		return (
			<View style = {[
				component__StatusBar___iPhone_6__7__8__SE_stylesheet._Dark_Mode_False,
				{
				},
			]}>
				<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Time, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Time, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					{variant1_text1}
				</Text>
				</View>
				<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Right_Side}>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Battery}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Body}>
						</View>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Terminal} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 0 0 C 0.8904190063476562 0.45517775416374207 1.5 1.3814738988876343 1.5 2.4501452445983887 C 1.5 3.518816590309143 0.8904190063476562 4.445112735033035 0 4.900290489196777 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Reserve} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 1 0 L 19 0 C 19.55228477716446 0 20 0.44771522283554077 20 1 L 20 6.5 C 20 7.052284777164459 19.55228477716446 7.5 19 7.5 L 1 7.5 C 0.44771522283554077 7.5 0 7.052284777164459 0 6.5 L 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._100_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._100_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						{variant1_text2}
					</Text>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Alarm}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Alarm_2}>
						</View>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Bluetooth}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Bluetooth_2}>
						</View>
					</View>
				</View>
				<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Left_Side}>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Mobile_Signal}>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Signal} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 14.5 0 L 15.5 0 C 16.05228477716446 -1.014530602374735e-16 16.5 0.44771522283554077 16.5 1 L 16.5 9 C 16.5 9.55228477716446 16.05228477716446 10 15.5 10 L 14.5 10 C 13.94771522283554 10 13.5 9.55228477716446 13.5 9 L 13.5 1 C 13.5 0.44771522283554077 13.94771522283554 1.014530602374735e-16 14.5 0 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 11 2 L 10 2 C 9.447714805603027 2 9 2.4477152228355408 9 3 L 9 9 C 9 9.552284717559814 9.447714805603027 10 10 10 L 11 10 C 11.552284240722656 10 12 9.552284717559814 12 9 L 12 3 C 12 2.4477152228355408 11.552284240722656 2 11 2 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 5.5 4 L 6.5 4 C 7.0522847175598145 4 7.5 4.4477152824401855 7.5 5 L 7.5 9 C 7.5 9.552284717559814 7.0522847175598145 10 6.5 10 L 5.5 10 C 4.9477152824401855 10 4.5 9.552284717559814 4.5 9 L 4.5 5 C 4.5 4.4477152824401855 4.9477152824401855 4 5.5 4 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 1 5.5 L 2 5.5 C 2.5522847175598145 5.5 3 5.9477152824401855 3 6.5 L 3 9 C 3 9.552284717559814 2.5522847175598145 10 2 10 L 1 10 C 0.44771522283554077 10 0 9.552284717559814 0 9 L 0 6.5 C 0 5.9477152824401855 0.44771522283554077 5.5 1 5.5 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Carrier, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Carrier, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						{variant1_text3}
					</Text>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Wifi}>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Wi_Fi} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 13.982769966125488 2.5229430198669434 C 12.071735382080078 0.8905717134475708 9.657404899597168 0 7.132718563079834 0 C 4.60055685043335 0 2.179527312517166 0.8958898782730103 0.2661421597003937 2.5370826721191406 L 0.10364510864019394 2.6764633655548096 C -0.027763791382312775 2.7891783714294434 -0.03530680388212204 2.989536762237549 0.08725721389055252 3.111760139465332 L 1.2142019271850586 4.235573768615723 C 1.3235872983932495 4.3446550369262695 1.4984952211380005 4.352097034454346 1.6168004274368286 4.252703666687012 L 1.7564117908477783 4.135409832000732 C 3.26326847076416 2.8694310188293457 5.15516996383667 2.180354595184326 7.132718563079834 2.180354595184326 C 9.103541374206543 2.180354595184326 10.989392280578613 2.8647170066833496 12.494010925292969 4.122830867767334 L 12.633569717407227 4.239524841308594 C 12.75190258026123 4.338471412658691 12.926438331604004 4.330840587615967 13.035634994506836 4.22194766998291 L 14.162742614746094 3.0979716777801514 C 14.285478591918945 2.975576877593994 14.277715682983398 2.7748804092407227 14.145890235900879 2.6622772216796875 L 13.982769966125488 2.5229430198669434 Z M 7.132718563079834 3.4697933197021484 C 8.723553657531738 3.4697933197021484 10.250974655151367 3.9975366592407227 11.495265007019043 4.97485876083374 L 11.671113967895508 5.112978458404541 C 11.811310768127441 5.223095417022705 11.823626518249512 5.430588722229004 11.697434425354004 5.556429862976074 L 10.566656112670898 6.684066295623779 C 10.462066650390625 6.788365364074707 10.296578407287598 6.800344944000244 10.177980422973633 6.712202548980713 L 10.040138244628906 6.609757423400879 C 9.199747085571289 5.9851765632629395 8.186385154724121 5.650147914886475 7.132718563079834 5.650147914886475 C 6.072564125061035 5.650147914886475 5.053282737731934 5.989343643188477 4.210102081298828 6.621091842651367 L 4.072118759155273 6.724475383758545 C 3.9535138607025146 6.8133392333984375 3.787416696548462 6.801639080047607 3.682516574859619 6.697030544281006 L 2.552155017852783 5.569809436798096 C 2.4262301921844482 5.444234371185303 2.438185691833496 5.237265586853027 2.5777370929718018 5.126940727233887 L 2.752589464187622 4.988707542419434 C 3.999838352203369 4.0026726722717285 5.534210205078125 3.4697933197021484 7.132718563079834 3.4697933197021484 Z M 7.132719039916992 6.939586639404297 C 7.772216320037842 6.939586639404297 8.393600463867188 7.10762882232666 8.941115379333496 7.428051948547363 L 9.162954330444336 7.5578789710998535 C 9.331138610839844 7.65630578994751 9.360713958740234 7.88665771484375 9.222824096679688 8.024166107177734 L 7.328740119934082 9.912986755371094 C 7.212399482727051 10.029004096984863 7.023773670196533 10.029004096984863 6.907433032989502 9.912986755371094 L 5.025522708892822 8.03630542755127 C 4.8882365226745605 7.899400234222412 4.916851997375488 7.670221328735352 5.083611965179443 7.57106876373291 L 5.302962303161621 7.440647125244141 C 5.855504512786865 7.11211633682251 6.484775543212891 6.939586639404297 7.132719039916992 6.939586639404297 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
				</View>
			</View>
		)
	}
	if (variant === "variant2"){
		return (
			<View style = {[
				component__StatusBar___iPhone_6__7__8__SE_stylesheet._Dark_Mode_Dark_Mode3,
				{
					position: variant2_position,
					width: variant2_width,
					height: variant2_height,
					left: variant2_left,
					right: variant2_right,
					top: variant2_top,
					bottom: variant2_bottom,
					transform: variant2_transform,
				},
			]}>
				<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Time_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Time_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					{variant2_text1}
				</Text>
				</View>
				<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Right_Side_2}>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Battery_2}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Body_2}>
						</View>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Terminal_2} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 0 0 C 0.8904190063476562 0.45517775416374207 1.5 1.3814738988876343 1.5 2.4501452445983887 C 1.5 3.518816590309143 0.8904190063476562 4.445112735033035 0 4.900290489196777 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Reserve_2} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 1 0 L 19 0 C 19.55228477716446 0 20 0.44771522283554077 20 1 L 20 6.5 C 20 7.052284777164459 19.55228477716446 7.5 19 7.5 L 1 7.5 C 0.44771522283554077 7.5 0 7.052284777164459 0 6.5 L 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._100__2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._100__2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						{variant2_text2}
					</Text>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Alarm_3}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Alarm_4}>
						</View>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Bluetooth_3}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Bluetooth_4}>
						</View>
					</View>
				</View>
				<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Left_Side_2}>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Mobile_Signal_2}>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Signal_2} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 14.5 0 L 15.5 0 C 16.05228477716446 -1.014530602374735e-16 16.5 0.44771522283554077 16.5 1 L 16.5 9 C 16.5 9.55228477716446 16.05228477716446 10 15.5 10 L 14.5 10 C 13.94771522283554 10 13.5 9.55228477716446 13.5 9 L 13.5 1 C 13.5 0.44771522283554077 13.94771522283554 1.014530602374735e-16 14.5 0 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 11 2 L 10 2 C 9.447714805603027 2 9 2.4477152228355408 9 3 L 9 9 C 9 9.552284717559814 9.447714805603027 10 10 10 L 11 10 C 11.552284240722656 10 12 9.552284717559814 12 9 L 12 3 C 12 2.4477152228355408 11.552284240722656 2 11 2 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 5.5 4 L 6.5 4 C 7.0522847175598145 4 7.5 4.4477152824401855 7.5 5 L 7.5 9 C 7.5 9.552284717559814 7.0522847175598145 10 6.5 10 L 5.5 10 C 4.9477152824401855 10 4.5 9.552284717559814 4.5 9 L 4.5 5 C 4.5 4.4477152824401855 4.9477152824401855 4 5.5 4 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 1 5.5 L 2 5.5 C 2.5522847175598145 5.5 3 5.9477152824401855 3 6.5 L 3 9 C 3 9.552284717559814 2.5522847175598145 10 2 10 L 1 10 C 0.44771522283554077 10 0 9.552284717559814 0 9 L 0 6.5 C 0 5.9477152824401855 0.44771522283554077 5.5 1 5.5 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Carrier_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Carrier_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						{variant2_text3}
					</Text>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Wifi_2}>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Wi_Fi_2} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 13.982769966125488 2.5229430198669434 C 12.071735382080078 0.8905717134475708 9.657404899597168 0 7.132718563079834 0 C 4.60055685043335 0 2.179527312517166 0.8958898782730103 0.2661421597003937 2.5370826721191406 L 0.10364510864019394 2.6764633655548096 C -0.027763791382312775 2.7891783714294434 -0.03530680388212204 2.989536762237549 0.08725721389055252 3.111760139465332 L 1.2142019271850586 4.235573768615723 C 1.3235872983932495 4.3446550369262695 1.4984952211380005 4.352097034454346 1.6168004274368286 4.252703666687012 L 1.7564117908477783 4.135409832000732 C 3.26326847076416 2.8694310188293457 5.15516996383667 2.180354595184326 7.132718563079834 2.180354595184326 C 9.103541374206543 2.180354595184326 10.989392280578613 2.8647170066833496 12.494010925292969 4.122830867767334 L 12.633569717407227 4.239524841308594 C 12.75190258026123 4.338471412658691 12.926438331604004 4.330840587615967 13.035634994506836 4.22194766998291 L 14.162742614746094 3.0979716777801514 C 14.285478591918945 2.975576877593994 14.277715682983398 2.7748804092407227 14.145890235900879 2.6622772216796875 L 13.982769966125488 2.5229430198669434 Z M 7.132718563079834 3.4697933197021484 C 8.723553657531738 3.4697933197021484 10.250974655151367 3.9975366592407227 11.495265007019043 4.97485876083374 L 11.671113967895508 5.112978458404541 C 11.811310768127441 5.223095417022705 11.823626518249512 5.430588722229004 11.697434425354004 5.556429862976074 L 10.566656112670898 6.684066295623779 C 10.462066650390625 6.788365364074707 10.296578407287598 6.800344944000244 10.177980422973633 6.712202548980713 L 10.040138244628906 6.609757423400879 C 9.199747085571289 5.9851765632629395 8.186385154724121 5.650147914886475 7.132718563079834 5.650147914886475 C 6.072564125061035 5.650147914886475 5.053282737731934 5.989343643188477 4.210102081298828 6.621091842651367 L 4.072118759155273 6.724475383758545 C 3.9535138607025146 6.8133392333984375 3.787416696548462 6.801639080047607 3.682516574859619 6.697030544281006 L 2.552155017852783 5.569809436798096 C 2.4262301921844482 5.444234371185303 2.438185691833496 5.237265586853027 2.5777370929718018 5.126940727233887 L 2.752589464187622 4.988707542419434 C 3.999838352203369 4.0026726722717285 5.534210205078125 3.4697933197021484 7.132718563079834 3.4697933197021484 Z M 7.132719039916992 6.939586639404297 C 7.772216320037842 6.939586639404297 8.393600463867188 7.10762882232666 8.941115379333496 7.428051948547363 L 9.162954330444336 7.5578789710998535 C 9.331138610839844 7.65630578994751 9.360713958740234 7.88665771484375 9.222824096679688 8.024166107177734 L 7.328740119934082 9.912986755371094 C 7.212399482727051 10.029004096984863 7.023773670196533 10.029004096984863 6.907433032989502 9.912986755371094 L 5.025522708892822 8.03630542755127 C 4.8882365226745605 7.899400234222412 4.916851997375488 7.670221328735352 5.083611965179443 7.57106876373291 L 5.302962303161621 7.440647125244141 C 5.855504512786865 7.11211633682251 6.484775543212891 6.939586639404297 7.132719039916992 6.939586639404297 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
				</View>
			</View>
		)
	}
	if (variant === "variant3"){
		return (
			<View style = {[
				component__StatusBar___iPhone_6__7__8__SE_stylesheet._Dark_Mode_Dark_Mode4,
				{
				},
			]}>
				<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Time_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Time_3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					{variant3_text1}
				</Text>
				</View>
				<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Right_Side_3}>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Battery_3}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Body_3}>
						</View>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Terminal_3} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 0 0 C 0.8904190063476562 0.45517775416374207 1.5 1.3814738988876343 1.5 2.4501452445983887 C 1.5 3.518816590309143 0.8904190063476562 4.445112735033035 0 4.900290489196777 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Reserve_3} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 1 0 L 19 0 C 19.55228477716446 0 20 0.44771522283554077 20 1 L 20 6.5 C 20 7.052284777164459 19.55228477716446 7.5 19 7.5 L 1 7.5 C 0.44771522283554077 7.5 0 7.052284777164459 0 6.5 L 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._100__3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._100__3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						{variant3_text2}
					</Text>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Alarm_5}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Alarm_6}>
						</View>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Bluetooth_5}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Bluetooth_6}>
						</View>
					</View>
				</View>
				<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Left_Side_3}>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Mobile_Signal_3}>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Signal_3} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 14.5 0 L 15.5 0 C 16.05228477716446 -1.014530602374735e-16 16.5 0.44771522283554077 16.5 1 L 16.5 9 C 16.5 9.55228477716446 16.05228477716446 10 15.5 10 L 14.5 10 C 13.94771522283554 10 13.5 9.55228477716446 13.5 9 L 13.5 1 C 13.5 0.44771522283554077 13.94771522283554 1.014530602374735e-16 14.5 0 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 11 2 L 10 2 C 9.447714805603027 2 9 2.4477152228355408 9 3 L 9 9 C 9 9.552284717559814 9.447714805603027 10 10 10 L 11 10 C 11.552284240722656 10 12 9.552284717559814 12 9 L 12 3 C 12 2.4477152228355408 11.552284240722656 2 11 2 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 5.5 4 L 6.5 4 C 7.0522847175598145 4 7.5 4.4477152824401855 7.5 5 L 7.5 9 C 7.5 9.552284717559814 7.0522847175598145 10 6.5 10 L 5.5 10 C 4.9477152824401855 10 4.5 9.552284717559814 4.5 9 L 4.5 5 C 4.5 4.4477152824401855 4.9477152824401855 4 5.5 4 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 1 5.5 L 2 5.5 C 2.5522847175598145 5.5 3 5.9477152824401855 3 6.5 L 3 9 C 3 9.552284717559814 2.5522847175598145 10 2 10 L 1 10 C 0.44771522283554077 10 0 9.552284717559814 0 9 L 0 6.5 C 0 5.9477152824401855 0.44771522283554077 5.5 1 5.5 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Carrier_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Carrier_3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						{variant3_text3}
					</Text>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Wifi_3}>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Wi_Fi_3} fill = {"rgba(0, 0, 0, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 13.982769966125488 2.5229430198669434 C 12.071735382080078 0.8905717134475708 9.657404899597168 0 7.132718563079834 0 C 4.60055685043335 0 2.179527312517166 0.8958898782730103 0.2661421597003937 2.5370826721191406 L 0.10364510864019394 2.6764633655548096 C -0.027763791382312775 2.7891783714294434 -0.03530680388212204 2.989536762237549 0.08725721389055252 3.111760139465332 L 1.2142019271850586 4.235573768615723 C 1.3235872983932495 4.3446550369262695 1.4984952211380005 4.352097034454346 1.6168004274368286 4.252703666687012 L 1.7564117908477783 4.135409832000732 C 3.26326847076416 2.8694310188293457 5.15516996383667 2.180354595184326 7.132718563079834 2.180354595184326 C 9.103541374206543 2.180354595184326 10.989392280578613 2.8647170066833496 12.494010925292969 4.122830867767334 L 12.633569717407227 4.239524841308594 C 12.75190258026123 4.338471412658691 12.926438331604004 4.330840587615967 13.035634994506836 4.22194766998291 L 14.162742614746094 3.0979716777801514 C 14.285478591918945 2.975576877593994 14.277715682983398 2.7748804092407227 14.145890235900879 2.6622772216796875 L 13.982769966125488 2.5229430198669434 Z M 7.132718563079834 3.4697933197021484 C 8.723553657531738 3.4697933197021484 10.250974655151367 3.9975366592407227 11.495265007019043 4.97485876083374 L 11.671113967895508 5.112978458404541 C 11.811310768127441 5.223095417022705 11.823626518249512 5.430588722229004 11.697434425354004 5.556429862976074 L 10.566656112670898 6.684066295623779 C 10.462066650390625 6.788365364074707 10.296578407287598 6.800344944000244 10.177980422973633 6.712202548980713 L 10.040138244628906 6.609757423400879 C 9.199747085571289 5.9851765632629395 8.186385154724121 5.650147914886475 7.132718563079834 5.650147914886475 C 6.072564125061035 5.650147914886475 5.053282737731934 5.989343643188477 4.210102081298828 6.621091842651367 L 4.072118759155273 6.724475383758545 C 3.9535138607025146 6.8133392333984375 3.787416696548462 6.801639080047607 3.682516574859619 6.697030544281006 L 2.552155017852783 5.569809436798096 C 2.4262301921844482 5.444234371185303 2.438185691833496 5.237265586853027 2.5777370929718018 5.126940727233887 L 2.752589464187622 4.988707542419434 C 3.999838352203369 4.0026726722717285 5.534210205078125 3.4697933197021484 7.132718563079834 3.4697933197021484 Z M 7.132719039916992 6.939586639404297 C 7.772216320037842 6.939586639404297 8.393600463867188 7.10762882232666 8.941115379333496 7.428051948547363 L 9.162954330444336 7.5578789710998535 C 9.331138610839844 7.65630578994751 9.360713958740234 7.88665771484375 9.222824096679688 8.024166107177734 L 7.328740119934082 9.912986755371094 C 7.212399482727051 10.029004096984863 7.023773670196533 10.029004096984863 6.907433032989502 9.912986755371094 L 5.025522708892822 8.03630542755127 C 4.8882365226745605 7.899400234222412 4.916851997375488 7.670221328735352 5.083611965179443 7.57106876373291 L 5.302962303161621 7.440647125244141 C 5.855504512786865 7.11211633682251 6.484775543212891 6.939586639404297 7.132719039916992 6.939586639404297 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
				</View>
			</View>
		)
	}
	if (variant === "variant4"){
		return (
			<View style = {[
				component__StatusBar___iPhone_6__7__8__SE_stylesheet._Dark_Mode_True,
				{
				},
			]}>
				<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Time_4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Time_4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					{variant4_text1}
				</Text>
				</View>
				<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Right_Side_4}>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Battery_4}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Body_4}>
						</View>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Terminal_4} fill = {"rgba(255, 255, 255, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 0 0 C 0.8904190063476562 0.45517775416374207 1.5 1.3814738988876343 1.5 2.4501452445983887 C 1.5 3.518816590309143 0.8904190063476562 4.445112735033035 0 4.900290489196777 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Reserve_4} fill = {"rgba(255, 255, 255, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 1 0 L 19 0 C 19.55228477716446 0 20 0.44771522283554077 20 1 L 20 6.5 C 20 7.052284777164459 19.55228477716446 7.5 19 7.5 L 1 7.5 C 0.44771522283554077 7.5 0 7.052284777164459 0 6.5 L 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._100__4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._100__4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						{variant4_text2}
					</Text>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Alarm_7}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Alarm_8}>
						</View>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Bluetooth_7}>
						<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Bluetooth_8}>
						</View>
					</View>
				</View>
				<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Left_Side_4}>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Mobile_Signal_4}>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Signal_4} fill = {"rgba(255, 255, 255, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 14.5 0 L 15.5 0 C 16.052284717559814 -1.014530602374735e-16 16.5 0.44771522283554077 16.5 1 L 16.5 9 C 16.5 9.552285194396973 16.052284717559814 10 15.5 10 L 14.5 10 C 13.94771522283554 10 13.5 9.552285194396973 13.5 9 L 13.5 1 C 13.5 0.44771522283554077 13.94771522283554 1.014530602374735e-16 14.5 0 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 11 2 L 10 2 C 9.447714805603027 2 9 2.4477152228355408 9 3 L 9 9 C 9 9.552284717559814 9.447714805603027 10 10 10 L 11 10 C 11.552285194396973 10 12 9.552284717559814 12 9 L 12 3 C 12 2.4477152228355408 11.552285194396973 2 11 2 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 5.5 4 L 6.5 4 C 7.0522847175598145 4 7.5 4.4477152824401855 7.5 5 L 7.5 9 C 7.5 9.552284717559814 7.0522847175598145 10 6.5 10 L 5.5 10 C 4.9477152824401855 10 4.5 9.552284717559814 4.5 9 L 4.5 5 C 4.5 4.4477152824401855 4.9477152824401855 4 5.5 4 Z"}   strokeLinejoin = {"miter"}/>
						<Path fillRule = {"nonzero"} d = {"M 1 5.5 L 2 5.5 C 2.5522847175598145 5.5 3 5.9477152824401855 3 6.5 L 3 9 C 3 9.552284717559814 2.5522847175598145 10 2 10 L 1 10 C 0.44771522283554077 10 0 9.552284717559814 0 9 L 0 6.5 C 0 5.9477152824401855 0.44771522283554077 5.5 1 5.5 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Carrier_4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
					<Text style = {[component__StatusBar___iPhone_6__7__8__SE_stylesheet._Carrier_4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
						{variant4_text3}
					</Text>
					</View>
					<View style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Wifi_4}>
						<Svg style = {component__StatusBar___iPhone_6__7__8__SE_stylesheet._Wi_Fi_4} fill = {"rgba(255, 255, 255, 1)"}>
						<Path fillRule = {"evenodd"} d = {"M 13.982769966125488 2.5229430198669434 C 12.071735382080078 0.8905717134475708 9.657404899597168 0 7.132718563079834 0 C 4.60055685043335 0 2.179527312517166 0.8958898782730103 0.2661421597003937 2.5370826721191406 L 0.10364510864019394 2.6764633655548096 C -0.027763791382312775 2.7891783714294434 -0.03530680388212204 2.989536762237549 0.08725721389055252 3.111760139465332 L 1.2142019271850586 4.235573768615723 C 1.3235872983932495 4.3446550369262695 1.4984952211380005 4.352097034454346 1.6168004274368286 4.252703666687012 L 1.7564117908477783 4.135409832000732 C 3.26326847076416 2.8694310188293457 5.15516996383667 2.180354595184326 7.132718563079834 2.180354595184326 C 9.103541374206543 2.180354595184326 10.989392280578613 2.8647170066833496 12.494010925292969 4.122830867767334 L 12.633569717407227 4.239524841308594 C 12.75190258026123 4.338471412658691 12.926438331604004 4.330840587615967 13.035634994506836 4.22194766998291 L 14.162742614746094 3.0979716777801514 C 14.285478591918945 2.975576877593994 14.277715682983398 2.7748804092407227 14.145890235900879 2.6622772216796875 L 13.982769966125488 2.5229430198669434 Z M 7.132718563079834 3.4697933197021484 C 8.723553657531738 3.4697933197021484 10.250974655151367 3.9975366592407227 11.495265007019043 4.97485876083374 L 11.671113967895508 5.112978458404541 C 11.811310768127441 5.223095417022705 11.823626518249512 5.430588722229004 11.697434425354004 5.556429862976074 L 10.566656112670898 6.684066295623779 C 10.462066650390625 6.788364887237549 10.296578407287598 6.800344944000244 10.177980422973633 6.712202548980713 L 10.040138244628906 6.609757423400879 C 9.199746131896973 5.9851765632629395 8.186385154724121 5.650147914886475 7.132718563079834 5.650147914886475 C 6.072564125061035 5.650147914886475 5.053282737731934 5.989343643188477 4.210102081298828 6.621091842651367 L 4.072118759155273 6.724475383758545 C 3.9535138607025146 6.813339710235596 3.787416696548462 6.801639080047607 3.682516574859619 6.697030544281006 L 2.552155017852783 5.569809436798096 C 2.4262301921844482 5.444234371185303 2.438185691833496 5.237265586853027 2.5777370929718018 5.126940727233887 L 2.752589464187622 4.988707542419434 C 3.999838352203369 4.0026726722717285 5.534210205078125 3.4697933197021484 7.132718563079834 3.4697933197021484 Z M 7.132719039916992 6.939586639404297 C 7.772216320037842 6.939586639404297 8.393600463867188 7.10762882232666 8.941115379333496 7.428051948547363 L 9.162954330444336 7.5578789710998535 C 9.331137657165527 7.65630578994751 9.36071491241455 7.88665771484375 9.222824096679688 8.024166107177734 L 7.328740119934082 9.912986755371094 C 7.212399482727051 10.029004096984863 7.023773670196533 10.029004096984863 6.907433032989502 9.912986755371094 L 5.025522708892822 8.03630542755127 C 4.8882365226745605 7.899400234222412 4.916851997375488 7.670221328735352 5.083611965179443 7.57106876373291 L 5.302962303161621 7.440647125244141 C 5.855504512786865 7.11211633682251 6.484775543212891 6.939586639404297 7.132719039916992 6.939586639404297 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
				</View>
			</View>
		)
	}
}

const stylesheet = StyleSheet.create({
	_Main_Menu_Page: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 640,
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
	_Main_Menu: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 120,
		right: "auto",
		top: 34,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 150,
		fontSize: 26,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Auto_Layout_Horizontal_2: {
		position: "absolute",
		width: 315,
		height: 96,
		borderRadius: 0,
		left: 22,
		right: "auto",
		top: 108,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	_Auto_Layout_Vertical: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		shadowColor: "rgb(90, 108, 234)",
		shadowOffset: {
			width: 12,
			height: 26,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 50,
		backgroundColor: "rgba(255, 255, 255, 1)",
		paddingTop: 24,
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
	},
	_Auto_Layout_Horizontal_3: {
		position: "relative",
		width: 59,
		height: 59,
		borderRadius: 100,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)",
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		marginBottom: 10,
	},
	_Image___edit: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
	},
	_Frame_2: {
	},
	_Rectangle_2: {
		position: "absolute",
		width: 32,
		height: 32,
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
	_Medical_Info: {
		position: "relative",
		width: 128,
		height: 18,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 150,
		fontSize: 14,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
		flexShrink: 0,
	},
	_Auto_Layout_Horizontal_4: {
		position: "absolute",
		width: 315,
		height: 96,
		borderRadius: 0,
		left: 22,
		right: "auto",
		top: 225,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	_Auto_Layout_Vertical_2: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		shadowColor: "rgb(90, 108, 234)",
		shadowOffset: {
			width: 12,
			height: 26,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 50,
		backgroundColor: "rgba(255, 255, 255, 1)",
		paddingTop: 24,
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		marginRight: 12,
	},
	_Auto_Layout_Horizontal_5: {
		position: "relative",
		width: 59,
		height: 59,
		borderRadius: 100,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)",
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		marginBottom: 10,
	},
	_Action___supervisor_account: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
	},
	_Frame_3: {
	},
	_Rectangle_3: {
		position: "absolute",
		width: 32,
		height: 32,
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
	_Profile: {
		position: "relative",
		width: "100%",
		height: "auto",
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 150,
		fontSize: 14,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
		flexShrink: 0,
	},
	_Auto_Layout_Vertical_3: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		shadowColor: "rgb(90, 108, 234)",
		shadowOffset: {
			width: 12,
			height: 26,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 50,
		backgroundColor: "rgba(255, 255, 255, 1)",
		paddingTop: 24,
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
	},
	_Auto_Layout_Horizontal_6: {
		position: "relative",
		width: 59,
		height: 59,
		borderRadius: 100,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)",
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		marginBottom: 10,
	},
	_Hardware___headset: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
	},
	_Vector: {
	},
	_Rectangle_4: {
		position: "absolute",
		width: 32,
		height: 32,
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
	_Advisories_and_Guides: {
		position: "relative",
		width: 137,
		height: 21,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 150,
		fontSize: 14,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
		flexShrink: 0,
	},
	_Auto_Layout_Horizontal_7: {
		position: "absolute",
		width: 318,
		height: 105,
		borderRadius: 0,
		left: 22,
		right: "auto",
		top: 520,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	_Auto_Layout_Vertical_4: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		shadowColor: "rgb(90, 108, 234)",
		shadowOffset: {
			width: 12,
			height: 26,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 50,
		backgroundColor: "rgba(255, 255, 255, 1)",
		paddingTop: 24,
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		marginRight: 12,
	},
	_Group: {
		position: "relative",
		width: 40.0000114440918,
		height: 38.448001861572266,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
		minWidth: 0,
		flexShrink: 0,
		marginBottom: 10,
	},
	_Group_2: {
		position: "absolute",
		width: 40.0000114440918,
		height: 38.448001861572266,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-90deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_2: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 38.448001861572266,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "90deg"},
		],
	},
	_Vector_3: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 14,
		borderRadius: 0,
		left: -12.277099609375,
		right: 38.2771110534668,
		transform: [
			{translateX: 0},
			{translateY: 13},
			{rotate: "90deg"},
		],
	},
	_Settings: {
		position: "relative",
		width: "100%",
		height: "auto",
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 150,
		fontSize: 14,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
		flexShrink: 0,
	},
	_Auto_Layout_Vertical_5: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		shadowColor: "rgb(90, 108, 234)",
		shadowOffset: {
			width: 12,
			height: 26,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 50,
		backgroundColor: "rgba(255, 255, 255, 1)",
		paddingTop: 24,
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
	},
	_AED_Image_blue: {
		position: "relative",
		width: 58,
		height: 58,
		borderRadius: 0,
		opacity: 1,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
		marginBottom: 10,
	},
	_View_Nearby_AED: {
		position: "relative",
		width: 104,
		height: 21,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 150,
		fontSize: 14,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
		flexShrink: 0,
	},
	_Auto_Layout_Horizontal_8: {
		position: "absolute",
		width: 315,
		height: "auto",
		borderRadius: 0,
		left: 22,
		right: "auto",
		top: 342,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	_Auto_Layout_Vertical_6: {
		position: "relative",
		width: "auto",
		height: "100%",
		borderRadius: 20,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		borderWidth: 1,
		borderStyle: "solid",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		shadowColor: "rgb(90, 108, 234)",
		shadowOffset: {
			width: 12,
			height: 26,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 50,
		backgroundColor: "rgba(245, 73, 73, 1)",
		paddingTop: 24,
		paddingLeft: 24,
		paddingRight: 24,
		paddingBottom: 24,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
	},
	_Auto_Layout_Horizontal_9: {
		position: "relative",
		width: 73,
		height: 69,
		borderRadius: 100,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(41, 114, 254, 0.10000000149011612)",
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		marginBottom: 10,
	},
	_Image___music_note: {
		position: "relative",
		width: 38,
		height: 38,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
	},
	_Frame_4: {
	},
	_Rectangle_5: {
		position: "absolute",
		width: 38,
		height: 38,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0, 44, 128, 1)",
	},
	_Emergency_Response: {
		position: "relative",
		width: "100%",
		height: "auto",
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "SourceSansPro_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 150,
		fontSize: 24,
		color: "rgba(9, 16, 29, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
		flexShrink: 0,
	},
});
const component__StatusBar___iPhone_6__7__8__SE_stylesheet = StyleSheet.create({
	_Dark_Mode_False: {
		position: "relative",
		width: 375.0000305175781,
		height: 20.000001907348633,
		borderRadius: 0,
		minWidth: 0,
		overflow: "hidden",
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		marginBottom: 32,
	},
	_Time: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		transform: [
			{translateX: -23.500015258789062},
			{translateY: 3},
			{rotate: "0deg"},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Right_Side: {
		position: "absolute",
		width: 90.5,
		height: 16.29998779296875,
		transform: [
			{translateX: 279},
			{translateY: 3},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Battery: {
		position: "absolute",
		width: 26.5,
		height: 11.5,
		transform: [
			{translateX: 64},
			{translateY: 1.5},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Body: {
		position: "absolute",
		width: 24,
		height: 11.5,
		borderRadius: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Terminal: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 1.5,
		height: 4.900290489196777,
		borderRadius: 0,
		left: "auto",
		right: 0,
		top: 3.2998046875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Reserve: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 20,
		height: 7.5,
		borderRadius: 0,
		left: "auto",
		right: 4.5,
		top: 2,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_100_: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "auto",
		right: 29.5,
		top: 0.29998779296875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Alarm: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		left: "auto",
		right: 76.5,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Alarm_2: {
		position: "absolute",
		width: 10,
		height: 9.130000114440918,
		borderRadius: 0,
		transform: [
			{translateX: 2},
			{translateY: 2.5},
			{rotate: "0deg"},
		],
	},
	_Bluetooth: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		left: "auto",
		right: 61.5,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Bluetooth_2: {
		position: "absolute",
		width: 6.949609756469727,
		height: 11.760551452636719,
		borderRadius: 0,
		transform: [
			{translateX: 3.043701171875},
			{translateY: 1.119720458984375},
			{rotate: "0deg"},
		],
	},
	_Left_Side: {
		position: "absolute",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		overflow: "hidden",
		left: 4,
		right: "auto",
		top: 3,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
	},
	_Mobile_Signal: {
		position: "relative",
		width: 21,
		height: 14,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 4,
	},
	_Signal: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 10,
		borderRadius: 0,
		left: 2,
		right: 2.5,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_Carrier: {
		position: "relative",
		width: "auto",
		height: "auto",
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: -0.05000000074505806,
		flexShrink: 0,
		marginRight: 4,
	},
	_Wifi: {
		position: "relative",
		width: 15,
		height: 14,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
	},
	_Wi_Fi: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 10,
		borderRadius: 0,
		left: 0,
		right: 0.75,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_Dark_Mode_Dark_Mode3: {
		position: "relative",
		width: 375.0000305175781,
		height: 20.000001907348633,
		borderRadius: 0,
		minWidth: 0,
		overflow: "hidden",
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		marginBottom: 32,
	},
	_Time_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		transform: [
			{translateX: -23.500015258789062},
			{translateY: 3},
			{rotate: "0deg"},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Right_Side_2: {
		position: "absolute",
		width: 90.5,
		height: 16.29998779296875,
		transform: [
			{translateX: 279},
			{translateY: 3},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Battery_2: {
		position: "absolute",
		width: 26.5,
		height: 11.5,
		transform: [
			{translateX: 64},
			{translateY: 1.5},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Body_2: {
		position: "absolute",
		width: 24,
		height: 11.5,
		borderRadius: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Terminal_2: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 1.5,
		height: 4.900290489196777,
		borderRadius: 0,
		left: "auto",
		right: 0,
		top: 3.2998046875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Reserve_2: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 20,
		height: 7.5,
		borderRadius: 0,
		left: "auto",
		right: 4.5,
		top: 2,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_100__2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "auto",
		right: 29.5,
		top: 0.29998779296875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Alarm_3: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		left: "auto",
		right: 76.5,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Alarm_4: {
		position: "absolute",
		width: 10,
		height: 9.130000114440918,
		borderRadius: 0,
		transform: [
			{translateX: 2},
			{translateY: 2.5},
			{rotate: "0deg"},
		],
	},
	_Bluetooth_3: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		left: "auto",
		right: 61.5,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Bluetooth_4: {
		position: "absolute",
		width: 6.949609756469727,
		height: 11.760551452636719,
		borderRadius: 0,
		transform: [
			{translateX: 3.043701171875},
			{translateY: 1.119720458984375},
			{rotate: "0deg"},
		],
	},
	_Left_Side_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		overflow: "hidden",
		left: 4,
		right: "auto",
		top: 3,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
	},
	_Mobile_Signal_2: {
		position: "relative",
		width: 21,
		height: 14,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 4,
	},
	_Signal_2: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 10,
		borderRadius: 0,
		left: 2,
		right: 2.5,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_Carrier_2: {
		position: "relative",
		width: "auto",
		height: "auto",
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: -0.05000000074505806,
		flexShrink: 0,
		marginRight: 4,
	},
	_Wifi_2: {
		position: "relative",
		width: 15,
		height: 14,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
	},
	_Wi_Fi_2: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 10,
		borderRadius: 0,
		left: 0,
		right: 0.75,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_Dark_Mode_Dark_Mode4: {
		position: "relative",
		width: 375.0000305175781,
		height: 20.000001907348633,
		borderRadius: 0,
		minWidth: 0,
		overflow: "hidden",
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		marginBottom: 32,
	},
	_Time_3: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		transform: [
			{translateX: -23.500015258789062},
			{translateY: 3},
			{rotate: "0deg"},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Right_Side_3: {
		position: "absolute",
		width: 90.5,
		height: 16.29998779296875,
		transform: [
			{translateX: 279},
			{translateY: 3},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Battery_3: {
		position: "absolute",
		width: 26.5,
		height: 11.5,
		transform: [
			{translateX: 64},
			{translateY: 1.5},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Body_3: {
		position: "absolute",
		width: 24,
		height: 11.5,
		borderRadius: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Terminal_3: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 1.5,
		height: 4.900290489196777,
		borderRadius: 0,
		left: "auto",
		right: 0,
		top: 3.2998046875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Reserve_3: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 20,
		height: 7.5,
		borderRadius: 0,
		left: "auto",
		right: 4.5,
		top: 2,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_100__3: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "auto",
		right: 29.5,
		top: 0.29998779296875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Alarm_5: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		left: "auto",
		right: 76.5,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Alarm_6: {
		position: "absolute",
		width: 10,
		height: 9.130000114440918,
		borderRadius: 0,
		transform: [
			{translateX: 2},
			{translateY: 2.5},
			{rotate: "0deg"},
		],
	},
	_Bluetooth_5: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		left: "auto",
		right: 61.5,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Bluetooth_6: {
		position: "absolute",
		width: 6.949609756469727,
		height: 11.760551452636719,
		borderRadius: 0,
		transform: [
			{translateX: 3.043701171875},
			{translateY: 1.119720458984375},
			{rotate: "0deg"},
		],
	},
	_Left_Side_3: {
		position: "absolute",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		overflow: "hidden",
		left: 4,
		right: "auto",
		top: 3,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
	},
	_Mobile_Signal_3: {
		position: "relative",
		width: 21,
		height: 14,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 4,
	},
	_Signal_3: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 10,
		borderRadius: 0,
		left: 2,
		right: 2.5,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_Carrier_3: {
		position: "relative",
		width: "auto",
		height: "auto",
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: -0.05000000074505806,
		flexShrink: 0,
		marginRight: 4,
	},
	_Wifi_3: {
		position: "relative",
		width: 15,
		height: 14,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
	},
	_Wi_Fi_3: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: "auto",
		height: 10,
		borderRadius: 0,
		left: 0,
		right: 0.75,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_Dark_Mode_True: {
		position: "relative",
		width: 375.0000305175781,
		height: 20.000001907348633,
		borderRadius: 0,
		minWidth: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
	},
	_Time_4: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		transform: [
			{translateX: -23.500015258789062},
			{translateY: 3},
			{rotate: "0deg"},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Right_Side_4: {
		position: "absolute",
		width: 90.5,
		height: 16.29998779296875,
		transform: [
			{translateX: 279},
			{translateY: 3},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Battery_4: {
		position: "absolute",
		width: 26.5,
		height: 11.5,
		transform: [
			{translateX: 64},
			{translateY: 1.5},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Body_4: {
		position: "absolute",
		width: 24,
		height: 11.5,
		borderRadius: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Terminal_4: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: 1.5,
		height: 4.900290489196777,
		borderRadius: 0,
		left: "auto",
		right: 0,
		top: 3.2998046875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Reserve_4: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: 20,
		height: 7.5,
		borderRadius: 0,
		left: "auto",
		right: 4.5,
		top: 2,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_100__4: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "auto",
		right: 29.5,
		top: 0.29998779296875,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Alarm_7: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		left: "auto",
		right: 76.5,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Alarm_8: {
		position: "absolute",
		width: 10,
		height: 9.130000114440918,
		borderRadius: 0,
		transform: [
			{translateX: 2},
			{translateY: 2.5},
			{rotate: "0deg"},
		],
	},
	_Bluetooth_7: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 0,
		left: "auto",
		right: 61.5,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Bluetooth_8: {
		position: "absolute",
		width: 6.949609756469727,
		height: 11.760551452636719,
		borderRadius: 0,
		transform: [
			{translateX: 3.043701171875},
			{translateY: 1.119720458984375},
			{rotate: "0deg"},
		],
	},
	_Left_Side_4: {
		position: "absolute",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		overflow: "hidden",
		left: 4,
		right: "auto",
		top: 3,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
	},
	_Mobile_Signal_4: {
		position: "relative",
		width: 21,
		height: 14,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 4,
	},
	_Signal_4: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 10,
		borderRadius: 0,
		left: 2,
		right: 2.5,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_Carrier_4: {
		position: "relative",
		width: "auto",
		height: "auto",
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		fontFamily: "Comfortaa_400Regular",
		fontWeight: '400',
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 12,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: -0.05000000074505806,
		flexShrink: 0,
		marginRight: 4,
	},
	_Wifi_4: {
		position: "relative",
		width: 15,
		height: 14,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
	},
	_Wi_Fi_4: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: "auto",
		height: 10,
		borderRadius: 0,
		left: 0,
		right: 0.75,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
});

const imageUrl_AED_Image_blue = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/b3d4123a4ed9c5cb7937bc2ed489e313"