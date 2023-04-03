// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArX-BKbGESNAucOJTgG6mS8xKHuVY8OjI",
  authDomain: "tiktok-jornadadev-2810b.firebaseapp.com",
  projectId: "tiktok-jornadadev-2810b",
  storageBucket: "tiktok-jornadadev-2810b.appspot.com",
  messagingSenderId: "594396569397",
  appId: "1:594396569397:web:42e90578d56d82a74b767c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;