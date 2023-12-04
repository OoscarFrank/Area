import { Text, View, TouchableOpacity, Switch, Modal, StyleSheet } from 'react-native';
import React from 'react';

export default function ModalArea({ showSettings, setShowSettings, isSet, setIsSet, index, deleteCard}) {

    return (
        <Modal animationType="slide"
        visible={showSettings}
        transparent={true}>
            <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)', alignItems: "center" }}>
                <View style={{ height: '90%', backgroundColor: 'white', width: "100%" }}>
                    <TouchableOpacity onPress={() => setShowSettings(false)}>
                        <Text style={styles.return}>Return</Text>
                    </TouchableOpacity>
                    <Switch trackColor={{false: '#767577', true: '#0000FF'}}
                    thumbColor={isSet ? 'white' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(e) => setIsSet(index.x, index.y, e.valueOf())}
                    value={isSet}/>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.title}>AREA Details</Text>
                        <Text style={styles.subTitle}>When</Text>
                        <Text style={styles.subTitle}>Then</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => {deleteCard(index.x, index.y); setShowSettings(false)}}>
                            <Text style={{ color: '#fff' }}>Delete AREA</Text>
                        </TouchableOpacity>
                    </View>
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
        padding: 10,
        fontWeight: "bold",
    },
    subTitle: {
        padding: 10,
    },
    return: {
        padding: 10,
        color: "blue",
    },
});
