import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJA27wAXxQh7g79dPrCuREvx_KdrKLEUQ",
    authDomain: "chat-react-6ca06.firebaseapp.com",
    databaseURL: "https://chat-react-6ca06.firebaseio.com",
    projectId: "chat-react-6ca06",
    storageBucket: "chat-react-6ca06.appspot.com",
    messagingSenderId: "913849766174",
    appId: "1:913849766174:web:f5c63bc72b182631fbf90f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();

export const gProvider = new firebase.auth.GoogleAuthProvider();

export const fProvider = new firebase.auth.FacebookAuthProvider();

export const db = firebase.firestore();