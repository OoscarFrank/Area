import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomePageBar from './HomePageBar';
import Logo from '../../assets/logo.svg';
import HomePageCard from './HomePageCard';
import discord from '../../assets/discord.png';

const backColor = "#fff";

export default function HomePage({ setCurrentScreen }) {
    const [isSet, setIsSet] = useState(false);
    return (
        <View style={styles.container}>
            <HomePageBar setCurrentScreen={setCurrentScreen} />
            <HomePageCard isSet={isSet} setIsSet={setIsSet} when={{ img: discord, action: 'test' }} then={{ img: [discord, discord] }} />
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

