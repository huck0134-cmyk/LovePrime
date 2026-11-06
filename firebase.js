 import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5086fP29LwM5FjiycUKeb1fZ2XwnoEwE",
  authDomain: "loveprime.firebaseapp.com",
  projectId: "loveprime",
  storageBucket: "loveprime.firebasestorage.app",
  messagingSenderId: "599483789181",
  appId: "1:599483789181:web:f759db4471e86318886614",
  measurementId: "G-LK9PXDVWJH"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
};