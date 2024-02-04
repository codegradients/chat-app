import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQKk22g0tO3KGO1AD5sVv8tGNt75BLcKw",
  authDomain: "next-chat-7389a.firebaseapp.com",
  projectId: "next-chat-7389a",
  storageBucket: "next-chat-7389a.appspot.com",
  messagingSenderId: "243884274625",
  appId: "1:243884274625:web:d34c1c04b0966833eb3540",
  measurementId: "G-E0WY9BS76K",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
