import React from "react";
import Header from "./Header";
import { Image, Text, View } from "react-native";
import styles from "../assets/styles/Styles";
import profileImage from '../assets/images/profileImage.jpg';
import { Card, CardContent } from "@mui/material";

const AboutMe = () => {
  return (
    <Card style={styles.aboutMe}>
      <Header />
      <View style={styles.aboutMeContent}>
        <View style={styles.aboutMeIntro}>
          <Text style={styles.greeting}>Hello! I&#39;m Santosh</Text>
          <Text style={styles.description}>
            Anim nostrud sit ut eiusmod excepteur esse reprehenderit magna mollit ad reprehenderit
            reprehenderit quis nisi dolore laborum laborum non. Tempor nostrud ullamco velit Lorem sint
            enim est occaecat eiusmod consectetur anim et cillum enim nostrud
          </Text>
        </View>
        <Image
          style={styles.profileImage}
          source={profileImage}
        />
      </View>
    </Card>
  );
};

export default AboutMe;