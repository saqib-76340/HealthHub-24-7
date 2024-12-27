import firebase from "firebase/compat";
//import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
import 'firebase/compat/auth'
// import { initializeApp } from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// const firebaseConfig = {
//   apiKey: "AIzaSyANFxlvCN8qItHpX3if1q9pnmHD41AGGtg",
//   authDomain: "medical-975e3.firebaseapp.com",
//   projectId: "medical-975e3",
//   storageBucket: "medical-975e3.appspot.com",
//   messagingSenderId: "960056248846",
//   appId: "1:960056248846:web:4c556047ea4176b4e4ca5f",
//   measurementId: "G-SKQPLZFVJ8"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBy5gNDUKWl-Vpen0RIZL4NShT-ZlsOgPM",
  authDomain: "health-hub-24.firebaseapp.com",
  projectId: "health-hub-24",
  storageBucket: "health-hub-24.firebasestorage.app",
  messagingSenderId: "362875624659",
  appId: "1:362875624659:web:b5fc5450f9b0f731bb8826",
  measurementId: "G-ZRNLF8GHT4"
};
// const app = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();

export default { firebase, db };
export const auth = getAuth();
export const database = getFirestore();