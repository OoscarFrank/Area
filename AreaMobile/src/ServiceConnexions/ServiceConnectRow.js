import { Text, View, TouchableOpacity, Switch, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default function ServiceConnectRow({area})
{
    const {app, icon, authUrl} = area;

    const openService = async () => {
      let result = await WebBrowser.openBrowserAsync(authUrl);
      if (result.type !== 'opened')
        return Linking.openURL(authUrl);
    };
    return (

        <TouchableOpacity onPress={() =>openService()} 
        style={{flexDirection : 'row', alignItems : 'center', height : 'auto', width : '100%', paddingTop : 10, 
        paddingBottom : 10, borderWidth : 1, borderLeftWidth : 0, borderRightWidth : 0, marginTop : 20}}>
            <Image source={icon} style={{ width: 40, height: 40,marginLeft: 15, marginRight : 10 }}  />
            <Text style={{fontSize : 20}}>{app}</Text>
        </TouchableOpacity>
    )
}