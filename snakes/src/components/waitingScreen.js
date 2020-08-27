import React, {useState, useEffect} from 'react';
import {View,Text, StyleSheet, TextInput, Alert} from 'react-native'; 
import {Button, Overlay, Input} from 'react-native-elements';
import {createGame, joinGame, onPlayerCreate} from '../api/cloudFunctions'
import DialogInput from 'react-native-dialog-input';
import { create } from 'react-test-renderer';
import { Avatar, Accessory } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import {db} from '../../config'

//should be the one fetched from database
const list = [{
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
]



//props include name
WaitingScreen = (props) => {
    const [players, setPlayers] = useState([props.route.params.name])
    const dbReference = db.ref('games/'+props.route.params.gameID);

    useEffect(() => {
        dbReference.once("value")
        .then((snapshot) => {
        let tempList = []
        for (key in snapshot.val()){
            console.log(snapshot.val());
            if (key !== "players"){
                tempList = [...tempList, key]
            }
        }
        let newList = players.concat(tempList);
        setPlayers(newList); 
    })
    }, [])
   
    return (
        <View style = {styles.container}>
            {
                players.map((l, i) => (
                <ListItem
                    key={i}
                    //leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l}
                    //subtitle={l.subtitle}
                    bottomDivider
                />
    ))}
        </View>
        
    )}

    const styles = StyleSheet.create({
        container: {
            marginTop: 20
        },
        avatar: {
            color: "red"
        }

    })

export default WaitingScreen;