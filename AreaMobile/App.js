import { useState } from 'react';
import LoginPage from './src/LoginPage/LoginPage';
import HomePage from './src/HomePage/HomePage';
import { ModalPortal } from 'react-native-modals';
import RegisterPage from './src/RegisterPage/RegisterPage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [registerInfo, setRegisterInfo] = useState('');
  return (
    <>
      {
        (currentScreen === 'login' && <LoginPage setCurrentScreen={setCurrentScreen} registerInfo={registerInfo} setRegisterInfo={setRegisterInfo}/>) ||
        (currentScreen === 'register' && <RegisterPage setCurrentScreen={setCurrentScreen} setRegisterInfo={setRegisterInfo}/>) ||
        (currentScreen === 'home' && <HomePage setCurrentScreen={setCurrentScreen}/>)
      }
      <ModalPortal />
    </>
  )
}

