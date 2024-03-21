import React from 'react';
import { View, Button, Text, Pressable} from 'react-native';

import { styles } from './BatButton.style';

export function BatButton() {
  return (
    <View style={styles.container}>
    <Pressable 
        onPress={()=> (console.log("Fui pressionado!"))}
        style={styles.button}>
    <Text style={styles.text}>GENERATE</Text></Pressable>

    <Pressable 
        onPress={()=> (console.log("Fui pressionado!"))}
        style={styles.button}>
    <Text style={styles.text}>⚡COPY</Text></Pressable>

    </View>
  );
}