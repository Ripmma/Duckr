import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDtewrBaJKUWZ6gX6FDmkh2qEJ5swtUD8c",
    authDomain: "duckr-f1ce2.firebaseapp.com",
    databaseURL: "https://duckr-f1ce2.firebaseio.com",
    projectId: "duckr-f1ce2",
    storageBucket: "duckr-f1ce2.appspot.com",
    messagingSenderId: "1096795911795"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth