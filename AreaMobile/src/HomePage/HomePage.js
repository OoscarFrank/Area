import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import HomePageBar from './HomePageBar';
import Logo from '../../assets/logo.svg';
import HomePageCard from './HomePageCard';
import discord from '../../assets/discord.png';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './Pagination';

const backColor = "#fff";

const lineItems = [
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord]}},
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord]}},
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord]}},
]
export default function HomePage({ setCurrentScreen }) {
    const [isSet, setIsSet] = useState(false);
    const [line, setLine] = useState(lineItems);
    const [activeIndex, setActiveIndex] = useState(0);
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <HomePageBar setCurrentScreen={setCurrentScreen} />
            <Carousel
                pagingEnabled={true}
                snapEnabled={true}
                mode="parallax"
                modeConfig={{
                  parallaxScrollingScale: 0.9,
                  parallaxScrollingOffset: 50,
                }}
                width={width}
                height={width / 2}
                data={line}
                scrollAnimationDuration={100}
                onSnapToItem={(index) => setActiveIndex(index)}
                renderItem={({ item }) => (
                    <HomePageCard isSet={isSet} setIsSet={setIsSet} when={item.when} then={item.then}/>
                )}
            />
            <Pagination activeIndex={activeIndex} itemCount={line.length} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backColor,
        alignItems: 'center',
    },
    viewPager: {
        flex: 1,
    },
});

