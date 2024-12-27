
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBy5gNDUKWl-Vpen0RIZL4NShT-ZlsOgPM",
    authDomain: "health-hub-24.firebaseapp.com",
    projectId: "health-hub-24",
    storageBucket: "health-hub-24.firebasestorage.app",
    messagingSenderId: "362875624659",
    appId: "1:362875624659:web:b5fc5450f9b0f731bb8826",
    measurementId: "G-ZRNLF8GHT4"
  };
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}