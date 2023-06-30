// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfTDqY476T3r6HalhnOeKluydZIr62nrU",
  authDomain: "emailandpassword-4b82d.firebaseapp.com",
  projectId: "emailandpassword-4b82d",
  storageBucket: "emailandpassword-4b82d.appspot.com",
  messagingSenderId: "65193718260",
  appId: "1:65193718260:web:ccc0f29ed5b159e751c9a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);