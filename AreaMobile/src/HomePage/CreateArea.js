import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Modal from "react-native-modal";
import DisplayActions from './DisplayActions';

export default function CreateArea({ showCreateArea, setShowCreateArea, Areas }) {
    return (
        <Modal animationType="slide"
            visible={showCreateArea}
            onBackdropPress={() => setShowCreateArea(false)}
            onBackButtonPress={() => setShowCreateArea(false)}
            onAccessibilityEscape={() => setShowCreateArea(false)}
            backdropOpacity={0.2}
            onAccessibilityAction={() => setShowCreateArea(false)}
            transparent={showCreateArea}>
            <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, top:"10%", height: '90%', backgroundColor: '#F3F2F8', width: "110%", alignSelf: "center" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => setShowCreateArea(false)}>
                        <Text style={styles.return}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Text style={styles.title}>Choose an action</Text>
                    {Areas.map((area, index) => (
                        <View style={{marginBottom: 15}}>
                            <DisplayActions key={index} Area={area}/>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 20,
        fontSize: 22,
        fontWeight: "bold",
    },
    subTitle: {
        padding: 20,
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
