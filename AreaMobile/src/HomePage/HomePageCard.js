import { StyleSheet, Text, View, TouchableOpacity, Switch, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const backColor = "#fff";

export default function HomePageCard({isSet, setIsSet, when, then}) {
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>When</Text>
        <View style={styles.contentContainer}>
            <View style={styles.alignContainer}>
                {
                    when.img && <Image source={when.img} style={styles.image}/>
                }
                <Text style={{marginLeft : 10, fontSize : 17, fontWeight : '400'}}>{when.action}</Text>
            </View>
            <Switch
                trackColor={{false: '#767577', true: '#0000FF'}}
                thumbColor={isSet ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setIsSet}
                value={isSet}
            />
        </View>
        <Text style={styles.textTitle}>Then</Text>
        <View style={styles.contentContainer}>
            <View style={styles.alignContainer}>    
                {
                    then.img.map((img) => <Image source={img} style={styles.image}/>)
                }
            </View>
            <TouchableOpacity>
                <MaterialCommunityIcons name='cog' size={25} color="black" />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderRadius: 10,
        padding: '2%',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: backColor,
        width: '85%',
        shadowColor: '#000000',
        shadowOffset: { width: 15, height: 15 },
        shadowOpacity:  0.4,
        shadowRadius: 6,
        elevation: 15,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    alignContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    decalImg : {
        marginLeft : 10,
    },
    image : {
        width: 25,
        height: 25,
        marginLeft : 10,
    },
    textTitle : {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 10,
    }
});

