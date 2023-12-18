import { useEffect, useState } from 'react';
import LoginPage from './src/LoginPage/LoginPage';
import HomePage from './src/HomePage/HomePage';
import RegisterPage from './src/RegisterPage/RegisterPage';
import * as SecureStore from 'expo-secure-store';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('');
  const [registerInfo, setRegisterInfo] = useState('');
  useEffect(() => {
    SecureStore.getItemAsync("AreaToken").then((token) => {
      if (token) {
        setCurrentScreen('home');
      }
      else
        setCurrentScreen('login');
    })
  }, []);
  return (
    <>
      {
        (currentScreen === 'login' && <LoginPage setCurrentScreen={setCurrentScreen} registerInfo={registerInfo} setRegisterInfo={setRegisterInfo}/>) ||
        (currentScreen === 'register' && <RegisterPage setCurrentScreen={setCurrentScreen} setRegisterInfo={setRegisterInfo}/>) ||
        (currentScreen === 'home' && <HomePage setCurrentScreen={setCurrentScreen}/>)
      }
    </>
  )
}

