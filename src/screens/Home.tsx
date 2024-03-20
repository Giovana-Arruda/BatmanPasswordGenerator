import React from "react";
import { BatLogo } from "../components/BatLogo/BatLogo";
import { View } from "react-native";
import { styles } from "./Styles";

export default function Home(){
    return (
        <View style={styles.appContainer}>

            <View style={styles.logoContainer}>
        <BatLogo />
    
        </View>
    </View>
    );
}