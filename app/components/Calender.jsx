import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../assets/styles/Styles';
import { Card } from '@mui/material';

export default Calendar = () => {
  return (
    <View style={styles.calendar}>
      <Text style={styles.calendarTitle}>Mark Your Calendar - Collab with me!</Text>

      <Text style={styles.calendarDescription}>
        Join me exploring similar interests or for a talk to discuss your
        passions and projects.
      </Text>

      <TouchableOpacity style={styles.calendarButton}>
        <Text style={styles.calendarButtonText}>Add to Calendar</Text>
      </TouchableOpacity>
    </View>
  );
};