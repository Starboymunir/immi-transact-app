// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgmzsXKsqrtqfmDbrOOJN6cKjHEZY4Bng",
  authDomain: "my-immi-transact.firebaseapp.com",
  projectId: "my-immi-transact",
  storageBucket: "my-immi-transact.appspot.com",
  messagingSenderId: "905303205019",
  appId: "1:905303205019:web:54c8bae3f2af499c2bd23e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export { firebaseConfig }

 export const db = getFirestore(app);
