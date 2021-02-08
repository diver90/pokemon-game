import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBk4ztvH5jOdjlwU3Jer3H2QoKJZ_ELCVE",
    authDomain: "pokemon-game-d1d04.firebaseapp.com",
    databaseURL: "https://pokemon-game-d1d04-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokemon-game-d1d04",
    storageBucket: "pokemon-game-d1d04.appspot.com",
    messagingSenderId: "676710758177",
    appId: "1:676710758177:web:3e49aa643faa940dc73060"
};

firebase.initializeApp(firebaseConfig);

export const  fire = firebase;
export const database = firebase.database();

export default database;

