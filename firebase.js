import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.PUBLIC_FIREBASE_APPID,
  measurementId: process.env.PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};