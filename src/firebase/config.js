// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8xZ02mrudMXqKIyMQc0SdmLjQcDtOYxQ",
  authDomain: "travelling-project-786c7.firebaseapp.com",
  projectId: "travelling-project-786c7",
  storageBucket: "travelling-project-786c7.firebasestorage.app",
  messagingSenderId: "799880826970",
  appId: "1:799880826970:web:62bc7302f8420a07f00863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
