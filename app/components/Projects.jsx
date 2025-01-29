import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from '../assets/styles/Styles';
import imageP1 from '../assets/images/imageP1.jpg';
import imageP2 from '../assets/images/imageP2.jpg';
import imageP3 from '../assets/images/imageP3.png';
import imageP4 from '../assets/images/imageP4.png';
import { Box, Card, Container, Grid2, Typography } from '@mui/material';

const Projects = () => {
  return (
    <Card style = {styles.projects}>
      <Text style={styles.projectTitle}>Projects</Text>
      <Text style={styles.projectDescription}>
        Duis nisi do exercitation in irure aliqua commodo nisi eu id
        reprehenderit dolore fugiat consectetur irure labore est ea.
      </Text>
      <View style={styles.projectImageGridContainer}>
        <View style={styles.projectImageRow}>
        <Image
            style={styles.imageP1}
            source={imageP1}
            resizeMode="cover"
          />
        <Image
            style={styles.imageP2}
            source={imageP2}
            resizeMode="cover"
          />
        </View>
        <View style={styles.projectImageColumn}>
        <Image
            style={styles.imageP3}
            source={imageP3}
            resizeMode="cover"
          />
        <Image
            style={styles.imageP4}
            source={imageP4}
            resizeMode="cover"
          />
        </View>
       
        </View>
    </Card>
  );
};

export default Projects;


