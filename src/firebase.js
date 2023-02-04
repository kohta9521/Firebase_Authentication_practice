import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAoca3b576LdEIYL8_kZzzMUA58DZlbnzo",
    authDomain: "fir-login-81c44.firebaseapp.com",
    projectId: "fir-login-81c44",
    storageBucket: "fir-login-81c44.appspot.com",
    messagingSenderId: "677358945171",
    appId: "1:677358945171:web:5833b3afb5989af5025e66"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider } ;