import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  databaseURL: import.meta.env.DATABASE_URL,
  projectId: "wolimmusic",
  storageBucket: "wolimmusic.appspot.com",
  messagingSenderId: "979522850299",
  appId: "1:979522850299:web:a704af58e7681c34790f5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)


export  { db, storage}