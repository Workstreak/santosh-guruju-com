import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/Styles';

export default Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Santosh Guruju</Text>
      <View style={styles.headerMenu}>
        <TouchableOpacity style={styles.headerMenuItem}>
          <Text style={styles.headerMenuItemSelectedText}>About me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerMenuItem}>
          <Text style={styles.headerMenuItemText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerMenuItem}>
          <Text style={styles.headerMenuItemText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerMenuItem}>
          <Text style={styles.headerMenuItemText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerMenuItem}>
          <Text style={styles.headerMenuItemText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

