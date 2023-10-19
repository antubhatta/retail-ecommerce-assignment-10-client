// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf-CqjFR-CFyo3iCXiR7-3rzhrDM4q6T8",
  authDomain: "self-module-51.firebaseapp.com",
  projectId: "self-module-51",
  storageBucket: "self-module-51.appspot.com",
  messagingSenderId: "353972211969",
  appId: "1:353972211969:web:8217623be516c76c508b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;