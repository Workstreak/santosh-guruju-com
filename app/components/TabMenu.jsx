import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import styles from '../assets/styles/Styles'

const Tab = ({ isActive, text, icon }) => {
  return (
    <View style={[styles.blogTab, isActive && styles.blogTabActive]}>
      <Image style={styles.blogTabIcon} source={icon} />
      <Text style={styles.blogTabText}>{text}</Text>
    </View>
  );
};

export default TabMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { text: "Books", icon: require("../assets/images/reading.svg") },
    { text: "Pictures", icon: require("../assets/images/image-1.svg") },
    { text: "Places", icon: require("../assets/images/map-pin.svg") },
    { text: "Memories", icon: require("../assets/images/favorite.svg") },
  ];

  return (
    <View style={styles.blogTabMenu}>
      {tabs.map((tab, index) => (
        <TouchableOpacity key={index} onPress={() => setActiveTab(index)}>
          <Tab isActive={activeTab === index} text={tab.text} icon={tab.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};