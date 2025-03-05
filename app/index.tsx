import React from "react";
import { ScrollView, View } from 'react-native';
import AboutMe from './components/AbountMe';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Calendar from './components/Calender';
import Contact from './components/Contact';
import styles from "./assets/styles/Styles";

function App() {
  return (
    <ScrollView contentContainerStyle={styles.appScrollView}>
      <View style={styles.appView}>
        <AboutMe />
        <Blog />
        <Projects />
        <Calendar />
        <Contact />
      </View>
    </ScrollView>
  );
};

export default App;