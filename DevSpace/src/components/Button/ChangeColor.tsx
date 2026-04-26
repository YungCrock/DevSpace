import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './ChangeColorStyles';


interface ChangeColorProps {
  onColorChange: () => void; 
}
export function ChangeColor({ onColorChange }: ChangeColorProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onColorChange}>
      <Text style={styles.buttonText}>ALTERAR TEMA</Text>
    </TouchableOpacity>
  );
}