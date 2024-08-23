// app/components/header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors'; // Adjust path if necessary
import { Header } from '@rneui/themed';
const HeaderC = () => {
  return (
    <Header
      backgroundColor="#3D3B3C"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "MY TITLE",
        style: { color: "#fff" }
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: 350 }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="left"
      rightComponent={{ icon: "home", color: "#fff" }}
      rightContainerStyle={{}}
      statusBarProps={{}}
      />
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.background,
    fontSize: 20,
  },
});

export default HeaderC;
