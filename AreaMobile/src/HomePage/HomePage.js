import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image, Dimensions, BackHandler, Alert } from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import HomePageBar from './HomePageBar';
import Logo from '../../assets/logo.svg';
import HomePageCard from './HomePageCard';
import discord from '../../assets/discord.png';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './Pagination';
import PopUpDetails from '../PopUpDetails/PopUpDetails';
import CreateArea from './CreateArea';

const backColor = "#fff";


const lineItems = [
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord]}, toggled : true},
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord]}, toggled : true},
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord]}, toggled : true}
]
const linelineItems = [
    {title : 'Discord', img : discord, content : [
        {when: {img: discord, action: 'one'}, then: {img: [discord, discord]}, toggled : true},
        {when: {img: discord, action: 'two'}, then: {img: [discord, discord]}, toggled : true},
        {when: {img: discord, action: 'three'}, then: {img: [discord, discord]}, toggled : true}
    ]},
    {title : 'Disc', img : discord, content : [
        {when: {img: discord, action: 'four f'}, then: {img: [discord, discord]}, toggled : true},
        {when: {img: discord, action: 'four five'}, then: {img: [discord, discord]}, toggled : true},
        {when: {img: discord, action: 'four six'}, then: {img: [discord, discord]}, toggled : true}
    ]},
    {title : 'tmpTest', img : discord, content : Array.from(lineItems)},
]

export default function HomePage({ setCurrentScreen }) {
    const [lines, setLines] = useState(linelineItems);
    const [activeIndex, setActiveIndex] = useState([0, 0, 0]);
    const [userDetailsVisible, setUserDetailsVisible] = useState(false);
    const [showCreateArea, setShowCreateArea] = useState(false);
    const width = Dimensions.get('window').width - 10;

    const deleteCard = (x, y) => {
        let oldLine = Array.from(lines);
        oldLine[x].content.splice(y, y + 1);
        setLines(oldLine);
    }

    const setIsSet = (x, y, value) => {
        let oldLine = Array.from(lines);
        oldLine[x].content[y].toggled = value;
        setLines(oldLine);
    }
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Revenir à la page de connection', 'Êtes-vous sûr de vouloir revenir à la page de connection ?', [
            {
              text: 'Annuler',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'Oui', onPress: () => setCurrentScreen('login')},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);

    return (
        <GestureHandlerRootView onAccessibilityEscape={() => setCurrentScreen('login')} style={styles.container}>
            <HomePageBar setCurrentScreen={setCurrentScreen} setModalVisible={setUserDetailsVisible}/>
            <PopUpDetails showDetails={userDetailsVisible} setShowDetails={setUserDetailsVisible} setCurrentScreen={setCurrentScreen} />
            <CreateArea setShowCreateArea={setShowCreateArea} showCreateArea={showCreateArea} Areas={linelineItems}/>
            <ScrollView>
                {
                    lines.map((line, index) => {
                        return (
                            <View style={{ width: '100%', borderBottomColor : 'black', borderBottomWidth : 2, padding : 10}} key={index}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <Image source={line.img} style={{ width: 30, height: 30}} />
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginLeft : 10 }}>{line.title}</Text>
                                </View>
                                <Carousel
                                    mode="parallax"
                                    modeConfig={{
                                    parallaxScrollingScale: 0.9,
                                    parallaxScrollingOffset: 1,
                                    }}
                                    width={width}
                                    height={width / 2}
                                    data={line.content}
                                    scrollAnimationDuration={500}
                                    onSnapToItem={(ind) => {
                                        let oldIndex = Array.from(activeIndex);
                                        oldIndex[index] = ind;
                                        console.log(oldIndex, activeIndex);
                                        setActiveIndex(oldIndex)
                                    }}
                                    renderItem={(it) => (
                                        <HomePageCard isSet={it.item.toggled} setIsSet={setIsSet} index={{x : index, y : it.index}} when={it.item.when} then={it.item.then} deleteCard={deleteCard}/>
                                    )}
                                    panGestureHandlerProps={{
                                        activeOffsetX: [-1, 1],
                                    }}
                                />
                                <Pagination activeIndex={activeIndex[index]} itemCount={line.content.length} />
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View>
                <TouchableOpacity onPress={() => setShowCreateArea(true)} style={{borderRadius: 30, backgroundColor: "blue", width: 50, height: 50, alignItems: "center", justifyContent: "center"}}>
                    <MaterialCommunityIcons name='plus-circle-outline' size={45} color="white" />
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
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

