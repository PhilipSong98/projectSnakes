import React, {useState, useEffect} from 'react';
import {View,Text, StyleSheet, TextInput, Alert, TouchableOpacity} from 'react-native'; 
import {Button, Overlay, Input} from 'react-native-elements';
import {createGame, joinGame, onPlayerCreate} from '../api/cloudFunctions'
import DialogInput from 'react-native-dialog-input';
import { create } from 'react-test-renderer';
import { Avatar, Accessory } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import {db} from '../../config'

//props include name
WaitingScreen = (props) => {
    const [players, setPlayers] = useState([])
    const dbReference = db.ref('games/'+props.route.params.gameID);
    let numOfplayers = 0;

    useEffect(() => {
        //number of players
        db.ref('games/' + props.route.params.gameID + '/players').on("value", (snapshot) => {
            numOfplayers = snapshot.val();
            console.log("antal: ", numOfplayers)
        })
        
        // Fires ones for all childs and everytime new child is added.
        dbReference.on("child_added", (snapshot) => {
            console.log("child added", snapshot.val(), snapshot.key);
            if (snapshot.key !== "players"){
                setPlayers(prevstate => {
                    return [...prevstate, snapshot.key]
                });
            }
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
            {props.route.params.creator ? <TouchableOpacity> {numOfplayers == 5 ? <Text>  Start! </Text> : <Text>Waiting for players</Text>} </TouchableOpacity> : null }
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