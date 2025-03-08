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
          A software professional with a zest for life and a passion for technology. Currently working in Tokyo, my career keeps me on my toes, but i always find time to indulge in my favorite activities and explore the world around me.

{"\n\n"}I'm an avid traveler, constantly seeking new cities and cultures to immerse myself in. There's nothing like the thrill of discovering hidden gems and creating unforgettable memories. When i'm not exploring, you can find me lost in the pages of a great book, diving into different worlds and expanding my horizons.

{"\n\n"}Learning new languages is another passion of mine. It's not just about the words, but the connections and insights they bring. Whether it's picking up a few phrases for my next trip or mastering a new language, i'm all in.

{"\n\n"}There's something magical about a good cup of coffee. I love it big time! Whether it's a quiet moment with a book or a lively conversation with friends, coffee has a way of making everything better.

{"\n\n"}Staying active is essential to me. I enjoy working out and maintaining a healthy lifestyle. It's not just about fitness; it's about feeling great and being my best self.

In addition to my current endeavors, i have long-term goals of making a significant impact in the tech industry and pursuing entrepreneurial ventures. {"\n\n"}I'm passionate about innovation and creating solutions that can improve lives. I'm always looking for opportunities to grow and make a difference.

I'm on the lookout for someone who shares my enthusiasm for life and values continuous growth. {"\n\n"}If you're interested in getting to know me better, i'd love to connect. Feel free to reach out!

Thank you!
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