import React, {useState, useEffect} from 'react';
import {View,Text, StyleSheet, TextInput, Alert} from 'react-native'; 
import {Button, Overlay, Input} from 'react-native-elements';
import {createGame, joinGame, onPlayerCreate} from '../api/cloudFunctions'
import DialogInput from 'react-native-dialog-input';
import { create } from 'react-test-renderer';



StartScreen = (props) => {
    const [value, setDialog] = useState(false)
    const [valueJoin, setDialogJoin] = useState(false)
    const [player, setPlayer] = useState({name: "", gameID: 0})
    const [joining, setJoining] = useState(false);
    const sendName = (name) => {
        var obj = {
            "name": name
        }
        createGame(obj).then((returnObj) => {
            console.log("creategame i startscreen", returnObj.data)
            setPlayer(...player, {["gameID"]: returnObj.data});
            props.navigation.navigate("Waiting", {
                name: name,
                gameID: returnObj.data,
                creator: true,
            }) 
        });
    }


    useEffect(() => {
        if (player.name === ""){
            console.log("no player name yet")
        } else {
            console.log("playername entered")
            joinGame(player).then((res) => {
                
                
                props.navigation.navigate("Waiting", {
                    name: player.name,
                    gameID: player.gameID,
                    creator: false,
                }); //send propname
            }).catch(error => {console.log("error i startscreen 39")})
        }
    }, [player.name])

    
    return (
        <View style = {styles.container} >
            <Button 
                title = "Create game"
                type = "outline"
                onPress = {() => {setDialog(!value)}}>
            </Button>
            <DialogInput isDialogVisible={value}
                title={"Create Game"}
                message={"Enter your name"}
                hintInput ={"Example Philip"}
                submitInput={ (inputText) => {sendName(inputText) 
                setDialog(!value)
                }}
                closeDialog={ () => {setDialog(!value)}}>
            </DialogInput>

             <Button
                title="Join game"
                type="outline"
                onPress = {() => setDialogJoin(!valueJoin)}
                />

            <DialogInput isDialogVisible={valueJoin}
                title={"Snakes"}
                message={"Enter game ID"}
                hintInput ={"Id here"}
                submitInput={ (ID) => {
                    setPlayer({...player, ["gameID"]: ID})
                    setDialogJoin(!valueJoin)
                    setJoining(!joining)
                }}
                closeDialog={ () => {setDialogJoin(!valueJoin)}}>
            </DialogInput>
            
            
            <DialogInput isDialogVisible={joining}
                title={"Snakes"}
                message={"Enter your name"}
                hintInput ={"Name here"}
                submitInput={ (name) => {
                setPlayer({
                    ...player,
                    ["name"]: name
                })
                console.log(name)
                setJoining(!joining)
                }}
                closeDialog={ () => {setJoining(!joining)}}>
            </DialogInput>
            <Button title = "waitingscreen"
                type = "outline"
                onPress = {() => {
                    props.navigation.navigate("Waiting")
                }}
            />
        </View>
        
    )}

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            marginTop: 190
        },
    })


export default StartScreen;