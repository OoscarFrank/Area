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
import * as SecureStore from 'expo-secure-store';
import ApiRoute from '../ApiRoute/ApiRoute';
import GetImages from '../GetImages/GetImages';


const backColor = "#fff";


const lineItems = [
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord], reaction: 'test'}, toggled : true},
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord], reaction: 'test'}, toggled : true},
    {when: {img: discord, action: 'test'}, then: {img: [discord, discord], reaction: 'test'}, toggled : true}
]
const linelineItems = [
    {title : 'Discord', img : discord, content : [
        {when: {img: discord, action: 'one'}, then: {img: [discord, discord], reaction: 'one'}, toggled : true},
        {when: {img: discord, action: 'two'}, then: {img: [discord, discord], reaction: 'two'}, toggled : true},
        {when: {img: discord, action: 'three'}, then: {img: [discord, discord], reaction: 'three'}, toggled : true}
    ]},
    {title : 'Disc', img : discord, content : [
        {when: {img: discord, action: 'four f'}, then: {img: [discord, discord], reaction: 'four'}, toggled : true},
        {when: {img: discord, action: 'four five'}, then: {img: [discord, discord], reaction: 'five'}, toggled : true},
        {when: {img: discord, action: 'four six'}, then: {img: [discord, discord], reaction: 'six'}, toggled : true}
    ]},
    {title : 'tmpTest', img : discord, content : Array.from(lineItems)},
]

export default function HomePage({ setCurrentScreen }) {
    const [lines, setLines] = useState([]);
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

    const filterAreasByApp = (data) => {
        const apps = new Array();
    }
    const getAreas = async () => {
        const token = await SecureStore.getItemAsync("AreaToken");
        if (!token)
            return setCurrentScreen('login');
        console.log(token);
        try {
            const res = await fetch(ApiRoute + "/api/area", {method : 'GET', headers : { 'Authorization': 'Bearer ' + token }});
            if (res.status != 200) {
                SecureStore.deleteItemAsync("AreaToken");
                return setCurrentScreen('login');
            }
            const data = await res.json();
            console.log(data.data);
            var newData = Array.from(data.data);
            for (let i in newData) {
                for (let j in newData[i].reactions)
                    newData[i].reactions[j].img = GetImages(newData[i].reactions[j].app);
                newData[i].action.img = GetImages(newData[i].action.app);
            }
            console.log(newData);
            setLines([{title : 'Disc', img : discord, content : newData}]);

        } catch (err) {
            console.log(err);
            return;
        }

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

        getAreas();
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
                                        <HomePageCard isSet={it.item.active} setIsSet={setIsSet} index={{x : index, y : it.index}} when={it.item.action} then={it.item.reactions} deleteCard={deleteCard}/>
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

