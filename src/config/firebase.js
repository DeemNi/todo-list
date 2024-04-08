import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCq3cXIKJmni_jvuPcFtKAJ6tp-x190N5s",
    authDomain: "wtw-todo-list.firebaseapp.com",
    projectId: "wtw-todo-list",
    storageBucket: "wtw-todo-list.appspot.com",
    messagingSenderId: "617192923514",
    appId: "1:617192923514:web:be3ca932b74a5a0592f6c3",
    measurementId: "G-MQEQRFDKKF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);