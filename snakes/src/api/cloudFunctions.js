import {firebase} from '@react-native-firebase/functions';

export const joinGame = (props) => firebase.functions().httpsCallable('joinGame')(props);

export const createGame = (props) => firebase.functions().httpsCallable('createGame')(props);

