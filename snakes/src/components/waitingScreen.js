import React, {useState, useEffect} from 'react';
import {View,Text, StyleSheet, TextInput, Alert} from 'react-native'; 
import {Button, Overlay, Input} from 'react-native-elements';
import {createGame, joinGame} from '../api/cloudFunctions'
import DialogInput from 'react-native-dialog-input';
import { create } from 'react-test-renderer';
import { Avatar, Accessory } from 'react-native-elements';
import { ListItem } from 'react-native-elements';

//should be the one fetched from database
const list = [{
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]


//props include name
WaitingScreen = (props) => {
    return (
        <View style = {styles.container}>
            {
                list.map((l, i) => (
                <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                />
    ))}
        </View>
        
    )}

    const styles = StyleSheet.create({
        container: {
            marginTop: 190
        },
        avatar: {
            color: "red"
        }

    })

export default WaitingScreen;