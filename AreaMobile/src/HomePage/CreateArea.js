import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from "react-native-modal";
import DisplayActions from './DisplayActions';
import DisplayReactions from './DisplayReactions';

export default function CreateArea({ showCreateArea, setShowCreateArea, Areas }) {
    const [step, setStep] = useState(0);
    const [action, setAction] = useState([0, 0]);

    const closeModal = () => {
        setStep(0);
        setAction([0, 0]);
        setShowCreateArea(false);
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
                        <TouchableOpacity onPress={() => closeModal()}>
                            <Text style={styles.return}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Text style={styles.title}>Choose reaction∙s</Text>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.subTitle}>Action selected: </Text>
                            <Image source={Areas[action[0]].img} style={{ width: 20, height: 20, marginTop: 15, marginLeft: 5 }} />
                            <Text style={{marginLeft: 10, marginTop: 10, fontSize: 18,}}>{Areas[action[0]].content[action[1]].when.action}</Text>
                        </View>
                        {Areas.map((area, index) => (
                            <View style={{ marginBottom: 15 }} key={index}>
                                <DisplayReactions Area={area} />
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
