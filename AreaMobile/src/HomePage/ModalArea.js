import { Text, View, TouchableOpacity, Switch, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import Modal from "react-native-modal";

export default function ModalArea({ showSettings, setShowSettings, isSet, setIsSet, index, deleteCard, image }) {
    return (
        <Modal animationType="slide"
            visible={showSettings}
            onBackdropPress={() => setShowSettings(false)}
            onBackButtonPress={() => setShowSettings(false)}
            onAccessibilityEscape={() => setShowSettings(false)}
            backdropOpacity={0.2}
            onAccessibilityAction={() => setShowSettings(false)}
            transparent={showSettings}>
            <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, top:"10%", height: '90%', backgroundColor: '#F3F2F8', width: "110%", alignSelf: "center" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => setShowSettings(false)}>
                        <Text style={styles.return}>Return</Text>
                    </TouchableOpacity>
                    <Switch trackColor={{ false: '#767577', true: '#0000FF' }}
                        thumbColor={isSet ? 'white' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(e) => setIsSet(index.x, index.y, e.valueOf())}
                        value={isSet} />
                </View>
                <ScrollView style={{ flex: 0, height: "60%" }}>
                    <Text style={styles.title}>AREA Details</Text>
                    <Text style={styles.subTitle}>When</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={image} style={styles.image} />
                        <Text style={{ marginLeft: 20, fontSize: 16 }}>message received</Text>
                    </View>
                    <Text style={styles.subTitle}>Then</Text>
                    {Array.from({ length: 13 }, (_, index) => {
                        return (
                            <View style={{ flexDirection: "row" }} key={index}>
                                <Image source={image} style={styles.image} />
                                <Text style={{ marginLeft: 20, fontSize: 16 }}>reaction name</Text>
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={{ flex: 1, alignItems: "center", paddingTop: 40 }}>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => { deleteCard(index.x, index.y); setShowSettings(false) }}>
                        <Text style={{ color: '#fff' }}>Delete AREA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: "red",
        borderRadius: 15,
        width: 150,
        height: 50,
        borderColor: "#000",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
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
    },
});
