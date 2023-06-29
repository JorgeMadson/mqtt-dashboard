// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFb_89yDs_nwyCH7z5bAUCh9oh4olklnY",
  authDomain: "mqtt-dashboard-pet.firebaseapp.com",
  projectId: "mqtt-dashboard-pet",
  storageBucket: "mqtt-dashboard-pet.appspot.com",
  messagingSenderId: "980051337225",
  appId: "1:980051337225:web:4edf27a4e7bc38934a18d8",
  measurementId: "G-1N7RPFTSG0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
