import React from "react";
import { Button, TextField, Grid, Typography, Container, Card } from '@mui/material';
import { View, Text, ScrollView } from 'react-native';
import AboutMe from './components/AbountMe';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Calendar from './components/Calender';
import Contact from './components/Contact';
import style from "./assets/styles/Styles";

function App () {
  return (
    <ScrollView contentContainerStyle={style.appScrollView}>
        <View style={style.appView}>
          <Card>
            <AboutMe />
            <Blog />
            <Projects />
            <Calendar />
            <Contact />
          </Card>
        </View>
    </ScrollView>
  );
};

export default App;