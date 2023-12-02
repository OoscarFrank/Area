import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Logo from '../../assets/logo.svg';
const backColor = "#fff";

export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={backColor}/>
      <Logo width={150} height={150} />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setUserName(text)}
          value={userName}
          selectionColor={'#0000FF'}
          placeholder='Login' />
          <MaterialCommunityIcons name='account' size={24} color="black" />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          selectionColor={'#0000FF'}
          placeholder='Password'
          secureTextEntry={!passwordVisible}/>
        <MaterialCommunityIcons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" onPress={() => setPasswordVisible(!passwordVisible)}/>
      </View>
      <TouchableOpacity onPress={() => console.log("touch !")}>
        <Text style={styles.fgtPassword}>Forgotten password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.connectionButton}>
        <Text style={styles.connectionButtonText}>Connection</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backColor,
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 75,
    paddingRight: 75,
  },
  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 50, 
},
input : {
  height: 40, 
  borderColor: 'black', 
  borderWidth: 2, 
  width: '100%', 
  borderRadius: 25, 
  paddingLeft: 10, 
  marginRight: 10
},
fgtPassword : {
  marginTop: 50,
  color: 'blue'
},
connectionButton : {
  marginTop: 50,
  backgroundColor: 'blue',
  width: '100%',
  height: 40,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center'
},
connectionButtonText : {
  color: 'white',
  fontSize : 20
}
});

