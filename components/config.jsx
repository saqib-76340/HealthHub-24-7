
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy5gNDUKWl-Vpen0RIZL4NShT-ZlsOgPM",
    authDomain: "health-hub-24.firebaseapp.com",
    projectId: "health-hub-24",
    storageBucket: "health-hub-24.firebasestorage.app",
    messagingSenderId: "362875624659",
    appId: "1:362875624659:web:b5fc5450f9b0f731bb8826",
    measurementId: "G-ZRNLF8GHT4"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);



