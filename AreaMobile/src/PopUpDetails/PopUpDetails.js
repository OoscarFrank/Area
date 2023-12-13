import { Text, View, TouchableOpacity, Switch, StyleSheet, Image, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';


export default function PopUpDetails({ showDetails, setShowDetails, setCurrentScreen}) {
    const deconnect = () => {
        SecureStore.deleteItemAsync("AreaToken").then(() => {
            console.log("Token deleted");
            setCurrentScreen('login');
        })
    }
    return (
        <Modal
            isVisible={showDetails}
            animationIn='slideInRight'
            animationOut='slideOutRight'
            onBackdropPress={() => setShowDetails(false)}
            backdropOpacity={0.0}
            onAccessibilityEscape={() => setShowDetails(false)}
            onAccessibilityAction={() => setShowDetails(false)}
            onBackButtonPress={() => setShowDetails(false)}
            >
            <View style={styles.baseModal}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding : '5%', alignItems : 'center'}}>
                    <Text style={styles.titleName}>Name - First Names</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setShowDetails(false)}>
                        <MaterialCommunityIcons name='window-close' size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>{'test@epitech.eu'}</Text>
                <View style={{width: '100%', alignItems : 'center', marginTop : '10%'}}>
                    <TouchableOpacity style={styles.logoutBtn} onPress={() => deconnect()}>
                        <Text style={{color : 'white', fontSize : 22}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    baseModal : {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 35,
        alignItems: "left",
        width : '75%',
        height : '20%',
        position: 'absolute',
        right: '1%',
        top : '2%',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    closeButton: {
        backgroundColor: "red",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    titleName: {
        fontSize: 22,
        fontWeight: "bold",
    },
    subTitle: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '400',
    },
    image: {
        width: 25,
        height: 25,
        marginLeft: 40,
    },
    logoutBtn: {
        backgroundColor: "red",
        padding: '2%',
        color: "white",
        fontSize: 20,
        width: '50%',
        alignItems: "center",
        borderRadius: 15,
    },
});
