import React, {useState} from 'react';
import { View, Button, Text, Pressable} from 'react-native';

import { styles } from './BatButton.style';
import { BatTextInput } from '../BatTextInput/BatTextInput';


export function BatButton() {
  const [password, setPassword] = useState('')

  function handleGenerateButton(){
    setPassword("teste")
  }

  return (
    <>
    <BatTextInput password={password} />
    <Pressable
        onPress={handleGenerateButton}
        style={styles.button}>
    <Text style={styles.text}>GENERATE</Text></Pressable>

    <Pressable 
        onPress={()=> (console.log("Fui pressionado!"))}
        style={styles.button}>
    <Text style={styles.text}>⚡COPY</Text></Pressable>
    </>
  );
}