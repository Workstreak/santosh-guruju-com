import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import TabMenu from './TabMenu'; 
import blogImage from '../assets/images/image.png'; 
import styles from '../assets/styles/Styles';
import { Card, CardActions, CardContent } from "@mui/material";
import CustomButton from './CustomButton';

const Blog = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Text></Text>;
      case 1:
        return <Text>Pictures Content</Text>;
      case 2:
        return <Text>Places Content</Text>;
      case 3:
        return <Text>Memories Content</Text>;
      default:
        return null;
    }
  };

  return (
    <Card style={styles.blog}>
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <CardContent>
      <View style={styles.content}>
        {renderContent()}
      </View>
      <Image source={blogImage} style={styles.blogImage} />
      <Text style={styles.forAgencyEnhance}>
        For Agency: Enhance your agency's capabilities with our comprehensive
        suite of tools designed to streamline operations and boost productivity.
      </Text>
      <CustomButton/>
      <Text style={styles.blogDateTextWrapper}>11/11/2022</Text>
      </CardContent>
      
    </Card>
  );
};

export default Blog;
