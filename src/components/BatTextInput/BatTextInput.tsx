import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInput.styles';

interface BatTextInputProps{
  password: string;
}


export function BatTextInput(props : BatTextInputProps) {
  return (
      <TextInput style={styles.inputer}
        placeholder='PASSWORD' 
        value={props.password}
        multiline={true}   />
        )};