import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Logo from '../../assets/logo.svg';
const backColor = "#fff";

export default function HomePageBar({setCurrentScreen, setModalVisible, setServicesConnexionsModalVisible}) {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={backColor}/>
        <View style={styles.contentContainer}>
            <View style={styles.leftContainer}>
                <Logo width={50} height={50}/>
                <Text style={styles.title}>AREA</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingRight : '1%', justifyContent : 'space-between'}}>
                <TouchableOpacity onPress={() => setServicesConnexionsModalVisible(true)} >
                    <MaterialCommunityIcons name='link' size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{marginLeft : '10%'}}>
                    <MaterialCommunityIcons name='account' size={50} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backColor,
        alignItems: 'center',
        width: '100%',
        paddingTop: 20,
        paddingBottom : 10 ,
        shadowColor: '#000000',
        shadowOffset: { width: 15, height: 15 },
        shadowOpacity:  0.4,
        shadowRadius: 6,
        elevation: 30,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        left: '4%'
    },
    title : {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});
