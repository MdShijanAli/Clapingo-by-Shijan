// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5XMLH6Ww1VwGpl-pT5FTlInLEzeDXmBQ",
    authDomain: "clapingo-shijan.firebaseapp.com",
    projectId: "clapingo-shijan",
    storageBucket: "clapingo-shijan.appspot.com",
    messagingSenderId: "1042823658267",
    appId: "1:1042823658267:web:8f8cf192477769748231be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;