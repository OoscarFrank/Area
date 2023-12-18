import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function DisplayReactions({ Area, setReactions }) {
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        let tmpTab = [];
        Area.reactions.forEach(_ => {
            tmpTab.push(false);
        });
        setChecked(tmpTab);
    }, [])

    const containerStyle = (index) => {
        let count = 0;
        Area.reactions.forEach(_ => {
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

    const handlePress = (index, reaction) => {
        let tmpTab = Array.from(checked);
        tmpTab[index] = !tmpTab[index];
        setChecked(tmpTab);
        let tmpReaction = { "app": "", "reaction": "" };
        tmpReaction["app"] = Area.app;
        tmpReaction["reaction"] = reaction;
        if (!checked[index]) {
            setReactions((prevReactions) => {
                const tmpReactions = [...prevReactions];
                tmpReactions.push(tmpReaction);
                return tmpReactions;
            });
        } else {
            setReactions((prevReactions) => {
                const tmpReactions = [...prevReactions];
                const res = [];
                for (let i = 0; i != tmpReactions.length; ++i)
                    tmpReactions[i].reaction != tmpReaction["reaction"] ? res.push(tmpReactions) : 0;
                return res;
            });
        }
    };

    return (
        <View style={{ width: "95%", alignSelf: "center" }}>
            {Area.reactions.map((reaction, index) => (
                <TouchableOpacity key={index} onPress={() => handlePress(index, reaction.code)}>
                    <View style={containerStyle(index)}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={Area.icon} style={{ width: 35, height: 35, marginTop: 10, marginLeft: 15 }} />
                                <Text style={{ marginTop: 15, marginLeft: 15 }}>{reaction.displayName}</Text>
                            </View>
                            <Checkbox value={checked[index]} onValueChange={() => handlePress(index, reaction.code)} style={{ marginRight: 15 }} />
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}
