import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import { styles } from './BatButton.style';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';


export function BatButton() {
  const [password, setPassword] = useState('')

  function handleGenerateButton(){
    let generateToken = generatePass();
    setPassword(generateToken);
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(password);
  }

  return (
    <>
    <BatTextInput password={password} />
    <Pressable
        onPress={handleGenerateButton}
        style={styles.button}>
    <Text style={styles.text}>GENERATE</Text></Pressable>

    <Pressable 
        onPress={handleCopyButton}
        style={styles.button}>
    <Text style={styles.text}>⚡COPY</Text></Pressable>
    </>
  );
}