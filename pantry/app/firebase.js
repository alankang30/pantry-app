// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGJcxufGu389hX1qYOlStmO-zAtTf_hXE",
  authDomain: "hspantryapp-2793c.firebaseapp.com",
  projectId: "hspantryapp-2793c",
  storageBucket: "hspantryapp-2793c.appspot.com",
  messagingSenderId: "41283107766",
  appId: "1:41283107766:web:3803bcfaa8419f6b735f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore};