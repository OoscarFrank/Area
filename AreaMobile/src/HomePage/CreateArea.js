import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import DisplayActions from './DisplayActions';
import DisplayReactions from './DisplayReactions';
import * as SecureStore from 'expo-secure-store';
import ApiRoute from '../ApiRoute/ApiRoute';
import GetImages from '../GetImages/GetImages';

export default function CreateArea({ showCreateArea, setShowCreateArea }) {
    const [step, setStep] = useState(0);
    const [action, setAction] = useState([0, 0]);
    const [reactions, setReactions] = useState([]);
    const [Areas, setAreas] = useState([]);
    const getAvailableAreas = async () => {
        const token = await SecureStore.getItemAsync("AreaToken");
        if (!token)
            return setCurrentScreen('login');
        try {
            const res = await fetch(ApiRoute + "/api/services", {method : 'GET', headers : { 'Authorization': 'Bearer ' + token }});
            if (res.status != 200) {
                SecureStore.deleteItemAsync("AreaToken");
                return setCurrentScreen('login');
            }
            const data = await res.json();
            let newData = Array.from(data);
            for (let i in newData)
                newData[i].icon = GetImages(newData[i].app);
            setAreas(data);
        } catch (err) {
            console.log(err);
            return;
        }

    }
    useEffect(() => {
        getAvailableAreas();
    }, []);

    const closeModal = () => {
        setStep(0);
        setAction([0, 0]);
        setShowCreateArea(false);
    };

    const create = () => {
        console.log(step)
        console.log(action)
        closeModal();
    }
    const truncateReaction = (str) => {
        let res = 0;
        while (str.indexOf(" ", res + 1) <= 18)
            res = str.indexOf(" ", res + 1);
        return res <= 18 ? res == 0 ? -1 : res : 0;
    };

    return (
        <Modal animationType="slide"
            visible={showCreateArea}
            onBackdropPress={() => closeModal()}
            onBackButtonPress={() => closeModal()}
            onAccessibilityEscape={() => closeModal()}
            backdropOpacity={0.2}
            onAccessibilityAction={() => closeModal()}
            transparent={showCreateArea}>
            {step == 0 ?
                <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, top: "10%", height: '90%', backgroundColor: '#F3F2F8', width: "110%", alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <Text style={styles.return}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Text style={styles.title}>Choose an action</Text>
                        {Areas.map((area, index) => (
                            <View style={{ marginBottom: 15 }} key={index}>
                                <DisplayActions Area={area} setStep={setStep} setAction={setAction} areaIndex={index}/>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                :
                <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, top: "10%", height: '90%', backgroundColor: '#F3F2F8', width: "110%", alignSelf: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => setStep(0)}>
                            <Text style={styles.return}>Return</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => create()}>
                            <Text style={styles.return}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Text style={styles.title}>Choose reaction∙s</Text>
                        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                            <Text style={styles.subTitle}>Action selected: </Text>
                            <Image source={Areas[action[0]].icon} style={{ width: 20, height: 20, marginTop: 15, marginLeft: 5 }} />
                            <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 10 }}>
                                {Areas[action[0]].actions[action[1]].displayName.length > 18
                                ? Areas[action[0]].actions[action[1]].displayName.substring(0, truncateReaction(Areas[action[0]].actions[action[1]].displayName))
                                : Areas[action[0]].actions[action[1]].displayName}
                            </Text>
                            {Areas[action[0]].actions[action[1]].displayName.length > 18 ?
                              <Text style={{ fontSize: 18, marginLeft: 20 }}>
                                {Areas[action[0]].actions[action[1]].displayName.substring(truncateReaction(Areas[action[0]].actions[action[1]].displayName) + 1)}
                              </Text> :
                              <></>
                            }
                        </View>
                        {Areas.map((area, index) => (
                            <View style={{ marginBottom: 15 }} key={index}>
                                <DisplayReactions Area={area} setReactions={setReactions}/>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            }
        </Modal>
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 20,
        fontSize: 22,
        fontWeight: "bold",
    },
    subTitle: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
    },
    image: {
        width: 25,
        height: 25,
        marginLeft: 40,
    },
    return: {
        padding: 20,
        color: "blue",
        fontSize: 16,
        fontWeight: "bold",
    },
});
