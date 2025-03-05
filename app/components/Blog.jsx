import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import TabMenu from './TabMenu'; 
import blogImage from '../assets/images/image.png'; 
import styles from '../assets/styles/Styles';
import { Card, CardContent } from "@mui/material";
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
        <View style={styles.blogContent}>
          {renderContent()}
          <Image source={blogImage} style={styles.blogImage} />
          <View style={styles.blogTextContent}>
            <Text style={styles.blogTitle}>Blog Title</Text>
              <Text style={styles.blogDescriptionText}>
                For Agency: Enhance your agency's capabilities with our comprehensive
                suite of tools designed to streamline operations and boost productivity.
              </Text>
            <CustomButton />
          </View>
        </View>
    </Card>
  );
};

export default Blog;
