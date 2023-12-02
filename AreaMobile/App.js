import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import LoginPage from './src/LoginPage/LoginPage';
import HomePage from './src/HomePage/HomePage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  return (
    <>
      {
        (currentScreen === 'login' && <LoginPage setCurrentScreen={setCurrentScreen}/>) ||
        (currentScreen === 'home' && <HomePage setCurrentScreen={setCurrentScreen}/>)
      }
    </>
  )
}

