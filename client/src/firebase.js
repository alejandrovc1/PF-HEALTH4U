// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKlR11_6BhfL9KwIY6RdujPo4C-XfH9Js",
  authDomain: "healt4u-327ee.firebaseapp.com",
  projectId: "healt4u-327ee",
  storageBucket: "healt4u-327ee.appspot.com",
  messagingSenderId: "428289733864",
  appId: "1:428289733864:web:73841c6d6f1330e493c55d",
  measurementId: "G-5VEWWFEQCP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)