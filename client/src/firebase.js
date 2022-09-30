// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBooxWVCFrDriYydNtGEGSxUOtwPUwG6X0",
  authDomain: "react-auth-pf.firebaseapp.com",
  projectId: "react-auth-pf",
  storageBucket: "react-auth-pf.appspot.com",
  messagingSenderId: "917804735198",
  appId: "1:917804735198:web:e18e28e6e71e054fad404f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)