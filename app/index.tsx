import React, { useState, useEffect } from "react";
import { ScrollView, View } from 'react-native';
import AboutMe from './components/AbountMe';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Calendar from './components/Calender';
import Contact from './components/Contact';
import CodeEntryPopup from './components/CodeEntryPopup';
import styles from "./assets/styles/Styles";
import * as Font from 'expo-font';

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // Show a loading screen or nothing until fonts are loaded
  }

  return (
    <>
      {!isAuthenticated && (
        <CodeEntryPopup onCorrectCode={() => setIsAuthenticated(true)} />
      )}
      {isAuthenticated && (
        <ScrollView contentContainerStyle={styles.appScrollView}>
          <View style={styles.appView}>
            <AboutMe />
            <Blog />
            <Projects />
            {/* <Calendar /> */}
            <Contact />
          </View>
        </ScrollView>
      )}
    </>
  );
}

export default App;

const loadFonts = async () => {
  await Font.loadAsync({
  //   Velista: require('./assets/fonts/velista/VELISTA.ttf'), // Font name and path
  //   Velvetta: require('./assets/fonts/velvetta/Velvetta.otf'),
  //   GochiHand: require('./assets/fonts/Gochi_Hand/GochiHand-Regular.ttf'),
  //   GreatVibes: require('./assets/fonts/Great_Vibes/GreatVibes-Regular.ttf'),
  });
};