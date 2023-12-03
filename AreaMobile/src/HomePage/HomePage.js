import { ScrollView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
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
const linelineItems = [
    lineItems,
    lineItems,
    lineItems
]
export default function HomePage({ setCurrentScreen }) {
    const [isSet, setIsSet] = useState(false);
    const [line, setLine] = useState(lineItems);
    const [lines, setLines] = useState(linelineItems);
    const [activeIndex, setActiveIndex] = useState([0, 0, 0]);
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <HomePageBar setCurrentScreen={setCurrentScreen} />
            <ScrollView>
                {
                    lines.map((line, index) => {
                        return (
                            <View style={{ width: 'auto', alignItems: 'center' }} key={index}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginTop: 20 }}>Line {index + 1}</Text>
                                <Carousel
                                    mode="parallax"
                                    modeConfig={{
                                    parallaxScrollingScale: 0.9,
                                    parallaxScrollingOffset: 50,
                                    }}
                                    width={width}
                                    height={width / 2}
                                    data={line}
                                    scrollAnimationDuration={500}
                                    onSnapToItem={(ind) => {
                                        let oldIndex = Array.from(activeIndex);
                                        oldIndex[index] = ind;
                                        console.log(oldIndex, activeIndex);
                                        setActiveIndex(oldIndex)
                                    }}
                                    renderItem={({ item }) => (
                                        <HomePageCard isSet={isSet} setIsSet={setIsSet} when={item.when} then={item.then}/>
                                    )}
                                />
                                <Pagination activeIndex={activeIndex[index]} itemCount={line.length} />
                            </View>
                        )
                    })
                }
            </ScrollView>
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

