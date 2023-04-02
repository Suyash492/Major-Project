// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg-ZUk5MpQUeDPwYSfV0WQzk-sX3WURTU",
  authDomain: "codingplatform-e551b.firebaseapp.com",
  projectId: "codingplatform-e551b",
  storageBucket: "codingplatform-e551b.appspot.com",
  messagingSenderId: "907609199581",
  appId: "1:907609199581:web:7dfa4da66b08203bd05c34",
  measurementId: "G-D4DLY4GETW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);