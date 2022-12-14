// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU1bfK1rlp-mtjq3Ut3iKX35i1RJ9MPok",
  authDomain: "info-heroes.firebaseapp.com",
  projectId: "info-heroes",
  storageBucket: "info-heroes.appspot.com",
  messagingSenderId: "1009506097887",
  appId: "1:1009506097887:web:bc1dc798b0b106319f276a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);