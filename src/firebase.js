import firebase from 'firebase/app';
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AE",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);

export default firebase;
