import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3ZMqii-pZdWRO6P3qFkCAqcp_g8i-Jsk",
  authDomain: "user-auth-project-5ca8b.firebaseapp.com",
  projectId: "user-auth-project-5ca8b",
  storageBucket: "user-auth-project-5ca8b.appspot.com",
  messagingSenderId: "395428118508",
  appId: "1:395428118508:web:4913f5bdb99eb62eab0ac9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export {app, db}