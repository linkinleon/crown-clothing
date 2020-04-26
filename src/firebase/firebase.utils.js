import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_GlwyEvU4ZVvXsei907zupQDGr_Y5z58",
    authDomain: "crown-clothing-db-c5450.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-c5450.firebaseio.com",
    projectId: "crown-clothing-db-c5450",
    storageBucket: "crown-clothing-db-c5450.appspot.com",
    messagingSenderId: "562105299398",
    appId: "1:562105299398:web:e4aee941ef4cfdda9ac2c7",
    measurementId: "G-ZKVHJ5DXKJ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;