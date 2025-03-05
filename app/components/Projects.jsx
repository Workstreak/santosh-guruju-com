import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../assets/styles/Styles';
import imageP1 from '../assets/images/imageP1.jpg';
import imageP2 from '../assets/images/imageP2.jpg';
import imageP3 from '../assets/images/imageP3.png';
import imageP4 from '../assets/images/imageP4.png';
import { Card } from '@mui/material';

const Projects = () => {
  return (
    <Card style={styles.projects}>
      <Text style={styles.projectTitle}>Projects</Text>
      <Text style={styles.projectDescription}>
        Duis nisi do exercitation in irure aliqua commodo nisi eu id
        reprehenderit dolore fugiat consectetur irure labore est ea.
      </Text>
      <View style={styles.projectImageGridContainer}>
        <Image
          style={styles.projectImage}
          source={imageP1}
          resizeMode="cover"
        />
        <Image
          style={styles.projectImage}
          source={imageP2}
          resizeMode="cover"
        />
        <Image
          style={styles.projectImage}
          source={imageP3}
          resizeMode="cover"
        />
        <Image
          style={styles.projectImage}
          source={imageP4}
          resizeMode="cover"
        />
      </View>
    </Card>
  );
};

export default Projects;


