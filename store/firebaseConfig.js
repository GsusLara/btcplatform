import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

//const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);
const firebaseConfig = {
    apiKey: "AIzaSyBxKhNdEwmpH-lPVMCpTX5xcCh0zTWQnhc",
    authDomain: "bitcoincostarica-506.firebaseapp.com",
    projectId: "bitcoincostarica-506",
    storageBucket: "bitcoincostarica-506.appspot.com",
    messagingSenderId: "667908126903",
    appId: "1:667908126903:web:7fe6b65b84e25d24ebb532",
    measurementId: "G-JLMLQT1Z1W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db};