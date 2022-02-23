// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIIqrnNNyqeqb3s2k_B4ip9LBqeY2Umvo",
  authDomain: "uber-next-clone-b3e8b.firebaseapp.com",
  projectId: "uber-next-clone-b3e8b",
  storageBucket: "uber-next-clone-b3e8b.appspot.com",
  messagingSenderId: "6315410491",
  appId: "1:6315410491:web:b72876fca48219ffa6c81e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = new getAuth()

export { app, provider, auth };