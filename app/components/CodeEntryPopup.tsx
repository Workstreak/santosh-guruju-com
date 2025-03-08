import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from '../assets/styles/Styles';

interface CodeEntryPopupProps {
  onCorrectCode: () => void;
}

const CodeEntryPopup = ({ onCorrectCode }: CodeEntryPopupProps) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  
  const CORRECT_CODE = '1234'; // Replace with your desired code
  
  const handleSubmit = () => {
    if (code === CORRECT_CODE) {
      onCorrectCode();
    } else {
      setError('Incorrect code. Please try again.');
      setCode('');
    }
  };

  return (
    <View style={styles.popUpcontainer}>
      <View style={styles.popup}>
        <Image 
          source={require('../assets/images/welcome.png')}
          style={styles.welcomeImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>Enter Access Code</Text>
        <TextInput
          style={styles.input}
          value={code}
          onChangeText={setCode}
          placeholder=""
          secureTextEntry
          keyboardType="number-pad"
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CodeEntryPopup; 