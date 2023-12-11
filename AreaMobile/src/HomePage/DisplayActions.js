import { Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

export default function DisplayActions({ Area }) {
    const containerStyle = (index) => {
        let count = 0;
        Area.content.forEach(_ => {
            ++count;
        });
        if (index == 0 || index == count - 1)
            return index == 0 ? {
                borderBottomColor: "#F3F2F8",
                borderBottomWidth: 2,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            } : {
                borderBottomColor: "#F3F2F8",
                borderBottomWidth: 2,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            }
        return {
            borderBottomColor: "#F3F2F8",
            borderBottomWidth: 2,
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "space-between",
        }
    };

    return (
        <View style={{ width: "95%", alignSelf: "center" }}>
            {Area.content.map((content, index) => (
                <TouchableOpacity>
                    <View key={index} style={containerStyle(index)}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={Area.img} style={{ width: 35, height: 35, marginTop: 10, marginLeft: 15 }} />
                            <Text style={{ marginTop: 15, marginLeft: 15 }}>{content.when.action}</Text>
                        </View>
                        <MaterialCommunityIcons name='chevron-right' size={45} color="#F3F2F8" />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}
