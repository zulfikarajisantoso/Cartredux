// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyByoevANngrBbx72eOyBbxJrh-xC_cjFQg",
  authDomain: "ecomredux-dce88.firebaseapp.com",
  projectId: "ecomredux-dce88",
  storageBucket: "ecomredux-dce88.appspot.com",
  messagingSenderId: "1056701815931",
  appId: "1:1056701815931:web:5d0150d3dc1851608096de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, storage, provider, auth };