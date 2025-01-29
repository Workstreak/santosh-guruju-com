import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/Styles';
import arrowRight from '../assets/images/arrow-right.svg';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.customButton}>
      <Text style={styles.buttonTextWrapper}>See More</Text>
      <Image style={styles.arrowRight} source={arrowRight} />
    </TouchableOpacity>
  );
};

export default CustomButton;
