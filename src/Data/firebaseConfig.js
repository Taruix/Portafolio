import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAWca8CPKRfG-G8bo09YGM3ZUM6Z0v68U",
  authDomain: "portafolio-53f9e.firebaseapp.com",
  projectId: "portafolio-53f9e",
  storageBucket: "portafolio-53f9e.appspot.com",
  messagingSenderId: "794933241051",
  appId: "1:794933241051:web:b2f28e5152204503a598fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
