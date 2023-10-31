// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCe5QmbUe-7d_hexWI_C5lsuMRWSvaoJJA",
    authDomain: "image-gallery-dee69.firebaseapp.com",
    projectId: "image-gallery-dee69",
    storageBucket: "image-gallery-dee69.appspot.com",
    messagingSenderId: "291464716778",
    appId: "1:291464716778:web:bc1373954ee2646d6e1293",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;