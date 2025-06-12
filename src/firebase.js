import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATqD_PGfGLWXg_AQ-QzFrV3SKQvapTyKE",
  authDomain: "todo-app-intern.firebaseapp.com",
  projectId: "todo-app-intern",
  storageBucket: "todo-app-intern.firebasestorage.app",
  messagingSenderId: "559673059132",
  appId: "1:559673059132:web:a5bb3bcf8b1c631bdea039",
  measurementId: "G-G01X4TY6C1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
