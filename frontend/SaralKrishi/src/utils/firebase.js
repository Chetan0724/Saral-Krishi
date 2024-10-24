// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeO1QOgJTh3operJOrsRswzi0wUq3DANs",
  authDomain: "saralkrishi-f46a4.firebaseapp.com",
  projectId: "saralkrishi-f46a4",
  storageBucket: "saralkrishi-f46a4.appspot.com",
  messagingSenderId: "150664317457",
  appId: "1:150664317457:web:6c821e2eb57f52803a7fb0",
  measurementId: "G-WZMG91K3QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// As this is required by all api in firebase so we're creating it single time seperately..
export const auth = getAuth();
export const provider = new GoogleAuthProvider();