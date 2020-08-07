import React, {useState, useEffect} from 'react';
import {View,Text, StyleSheet, TextInput, Alert} from 'react-native'; 
import {Button, Overlay, Input} from 'react-native-elements';
import {createGame, joinGame} from '../api/cloudFunctions'
import DialogInput from 'react-native-dialog-input';
import { create } from 'react-test-renderer';





WaitingScreen = () => {
    return (
        <View style = {styles.container}>
            
                
        </View>
        
    )}

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            marginTop: 190
        },

    })

export default WaitingScreen;