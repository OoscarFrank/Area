import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomePageBar from './HomePageBar';
import Logo from '../../assets/logo.svg';
const backColor = "#fff";

export default function HomePage({setCurrentScreen}) {
  return (
    <View style={styles.container}>
        <HomePageBar setCurrentScreen={setCurrentScreen}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backColor,
    alignItems: 'center',
  },
});

