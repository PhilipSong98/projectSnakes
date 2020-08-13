import Firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyA0p7b3VILXPhQ_9eRmKnqGjJQBpjjmaoQ",
    authDomain: "snakes-86c43.firebaseapp.com",
    databaseURL: "https://snakes-86c43.firebaseio.com",
    projectId: "snakes-86c43",
    storageBucket: "snakes-86c43.appspot.com",
    messagingSenderId: "66075411842",
    appId: "1:66075411842:web:31db0b39f14bbf4309fb9b",
    measurementId: "G-C4TPJ5QCVW"
    };

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();