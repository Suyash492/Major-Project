import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";

import "firebase/firestore";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg-ZUk5MpQUeDPwYSfV0WQzk-sX3WURTU",
  authDomain: "codingplatform-e551b.firebaseapp.com",
  projectId: "codingplatform-e551b",
  storageBucket: "codingplatform-e551b.appspot.com",
  messagingSenderId: "907609199581",
  appId: "1:907609199581:web:7dfa4da66b08203bd05c34",
  measurementId: "G-D4DLY4GETW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const db = firebase.firestore();
export default db;
