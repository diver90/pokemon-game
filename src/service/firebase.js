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

class Firebase {
    constructor() {


        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSocket = (callback) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            callback(snapshot.val());
        });
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot =>
            snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        return this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data) => {
         const newKey = this.database.ref().child('pokemons').push().key;
         this.database.ref('pokemons/' + newKey).set(data);
    }
}

export default Firebase;

