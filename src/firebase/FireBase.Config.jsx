// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCc3-F9ACAy-CvBExC-BpXUpad838w2Rw",
  authDomain: "belay-8268f.firebaseapp.com",
  projectId: "belay-8268f",
  storageBucket: "belay-8268f.firebasestorage.app",
  messagingSenderId: "415591473509",
  appId: "1:415591473509:web:b0fd0ef5fbfcd8fe23418c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)