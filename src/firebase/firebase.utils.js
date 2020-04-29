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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {email, displayName} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error);
        }
    }

    return userRef;
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const {title, items} = doc.data();

        return {
            routeName : encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items 
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newRef = collectionRef.doc();
        batch.set(newRef, obj)
    });
    return await batch.commit()
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;