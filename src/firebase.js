import firebase from 'firebase/app';
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDToJgGA_3AXAnuXoDIFi7OfMDBvvj3qzE",
    authDomain: "social-app-ab312.firebaseapp.com",
    projectId: "social-app-ab312",
    storageBucket: "social-app-ab312.appspot.com",
    messagingSenderId: "984769911314",
    appId: "1:984769911314:web:2f267307dea5c69a9a96cb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
