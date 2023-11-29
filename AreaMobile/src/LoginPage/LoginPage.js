import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Logo from '../../assets/logo.svg';

const backColor = "#fff";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={backColor}/>
      <Logo height={45} widht={45}/>
      <Text>Open up App.js to start working on your app!</Text>
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

