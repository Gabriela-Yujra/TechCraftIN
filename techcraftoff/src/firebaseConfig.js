import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCbXoG75iKXP7NNEvD64DDeMQ3JiWaQw8g",
  authDomain: "techcraft-ee8bd.firebaseapp.com",
  projectId: "techcraft-ee8bd",
  storageBucket: "techcraft-ee8bd.appspot.com",
  messagingSenderId: "1012855343797",
  appId: "1:1012855343797:web:7daf7e9bb4a44e55028cfc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  // Usando la nueva sintaxis

export { db, auth };



