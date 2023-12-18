import { Text, View, TouchableOpacity, Switch, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Linking from 'expo-linking';
import { authorize } from 'react-native-app-auth'


DISCORD_CLIENT_ID="1183779111005597766"
DISCORD_CLIENT_SECRET="COpuXx882iq6tNro6HnX5Gnf6j_9hl18"
DISCORD_TOKEN="MTE4Mzc3OTExMTAwNTU5Nzc2Ng.G4aJBG.t-gCy1zl5TWgnNsv2Y8OnhyEjWfxQrpPXn01Co"
export default function ServiceConnectRow({area})
{
    const {app, icon, authUrl} = area;

    const openService = async () => {
        const config = {
            clientId: '1183779111005597766',
            clientSecret: 'COpuXx882iq6tNro6HnX5Gnf6j_9hl18',
            redirectUrl: 'BUNDLE_IDENTIFIER://oauthredirect',
            scopes: ['email', 'identify'],
            serviceConfiguration: {
              authorizationEndpoint: 'https://discordapp.com/api/oauth2/authorize',
              tokenEndpoint: 'https://discordapp.com/api/oauth2/token',
              revocationEndpoint: 'https://discordapp.com/api/oauth2/token/revoke'
            }
        }
        try {
            const authResult = await authorize(config)
            console.log(authResult)
        } catch (error) {
            console.log(error)
        }
        // Linking.openURL(authUrl);
    }
    return (

        <TouchableOpacity onPress={() =>openService()} 
        style={{flexDirection : 'row', alignItems : 'center', height : 'auto', width : '100%', paddingTop : 10, 
        paddingBottom : 10, borderWidth : 1, borderLeftWidth : 0, borderRightWidth : 0, marginTop : 20}}>
            <Image source={icon} style={{ width: 40, height: 40,marginLeft: 15, marginRight : 10 }}  />
            <Text style={{fontSize : 20}}>{app}</Text>
        </TouchableOpacity>
    )
}