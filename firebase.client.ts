// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpS8hdRwlVAZjpJDDNzzFBJvvcj41w7O4",
  authDomain: "zapdos-99801.firebaseapp.com",
  projectId: "zapdos-99801",
  storageBucket: "zapdos-99801.appspot.com",
  messagingSenderId: "1027744588",
  appId: "1:1027744588:web:7a5c7b9be7a6acfaf3a5e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);