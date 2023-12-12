import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function DisplayReactions({ Area }) {
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        let tmpTab = [];
        Area.content.forEach(_ => {
            tmpTab.push(false);
        });
        setChecked(tmpTab);
    }, [])

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
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            } : {
                borderBottomColor: "#F3F2F8",
                borderBottomWidth: 2,
                backgroundColor: "#fff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            }
        return {
            borderBottomColor: "#F3F2F8",
            borderBottomWidth: 2,
            backgroundColor: "#fff",
        }
    };

    const handlePress = (index) => {
        let tmpTab = Array.from(checked);
        tmpTab[index] = !tmpTab[index];
        setChecked(tmpTab);
    };

    return (
        <View style={{ width: "95%", alignSelf: "center" }}>
            {Area.content.map((content, index) => (
                <TouchableOpacity key={index} onPress={() => handlePress(index)}>
                    <View style={containerStyle(index)}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{flexDirection: "row"}}>
                                <Image source={Area.img} style={{ width: 35, height: 35, marginTop: 10, marginLeft: 15 }} />
                                <Text style={{ marginTop: 15, marginLeft: 15 }}>{content.then.reaction}</Text>
                            </View>
                            <Checkbox value={checked[index]} onValueChange={() => handlePress(index)} style={{marginRight: 15}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}
