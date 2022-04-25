import firebase from "firebase/app";
import 'firebase/auth'

const config =firebase.initializeApp({
    apiKey: "AIzaSyAM285w-duFzEw2z3z11Xz-yfZtu0Qxcag",
    authDomain: "authtutorial-383ed.firebaseapp.com",
    projectId: "authtutorial-383ed",
    storageBucket: "authtutorial-383ed.appspot.com",
    messagingSenderId: "350816732200",
    appId: "1:350816732200:web:7602ea9a4660916881611d",
    measurementId: "G-MZM6XEZ5S4"
});

export const auth  = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider) 

export default config