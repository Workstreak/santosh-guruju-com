import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../assets/styles/Styles';

export default Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>Santosh Guruju</Text>
      <View style={style.headerMenu}>
        <TouchableOpacity style = {style.headerMenuItem}>
          <Text style={style.headerMenuItemSelectedText}>About me</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {style.headerMenuItem}>
          <Text style={style.headerMenuItemText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {style.headerMenuItem}>
          <Text style={style.headerMenuItemText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {style.headerMenuItem}>
          <Text style={style.headerMenuItemText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {style.headerMenuItem}>
          <Text style={style.headerMenuItemText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

