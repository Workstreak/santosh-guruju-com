import React from "react";
import Header from "./Header";
import { Image, Text, View } from "react-native";
import styles from "../assets/styles/Styles";
import profileImage from '../assets/images/profileImage.jpg'

export default AboutMe = () => {
  return (
    <View style = {styles.aboutMe}>
      <Header />
      <Image
        style={styles.profileImage}
        source={profileImage}
      />
      <View style = {styles.content}>
        <Text style = {styles.greeting}>Hello! I&#39;m Santosh</Text>
        <View style = {styles.description}>
          Anim nostrud sit ut eiusmod excepteur esse reprehenderit magna mollit ad reprehenderit
          reprehenderit quis nisi dolore laborum laborum non. Tempor nostrud ullamco velit Lorem sint
          enim est occaecat eiusmod consectetur anim et cillum enim nostrud
        </View>
      </View>
    </View>
  );
};