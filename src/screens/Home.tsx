import React from "react";
import { BatLogo } from "../components/BatLogo/BatLogo";
import { View } from "react-native";
import { styles } from "./Styles";
import { BatTextInput } from "../components/BatTextInput/BatTextInput";
import { StatusBar } from "expo-status-bar";

export default function Home(){
    return (
        <View style={styles.appContainer}>

        <View style={styles.logoContainer}>
        <BatLogo />
         </View>
         <View style={styles.inputContainer}> 
            <BatTextInput />
         </View>
         
         
         <StatusBar style="light" />

    </View>

    );
}