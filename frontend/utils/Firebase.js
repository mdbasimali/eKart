// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-509dc.firebaseapp.com",
  projectId: "loginonecart-509dc",
  storageBucket: "loginonecart-509dc.firebasestorage.app",
  messagingSenderId: "502852076146",
  appId: "1:502852076146:web:5a0a0ad3255804881338eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const provider =new GoogleAuthProvider()


export {auth,provider}