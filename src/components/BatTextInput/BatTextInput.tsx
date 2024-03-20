import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInput.styles';

export function BatTextInput() {
  return (
      <TextInput style={styles.inputer}
        placeholder='pass' 
        multiline={true}   />
        )};