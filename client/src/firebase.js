// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d3c53.firebaseapp.com",
  projectId: "mern-blog-d3c53",
  storageBucket: "mern-blog-d3c53.appspot.com",
  messagingSenderId: "142963234131",
  appId: "1:142963234131:web:8dbf5425489ed4f1fdfda6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);