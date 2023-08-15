// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDb8mWUOBFOc0VcbuPOatjXFnKMVU2XpG0",
  authDomain: "fir-crud-81dd0.firebaseapp.com",
  databaseURL: "https://fir-crud-81dd0-default-rtdb.firebaseio.com",
  projectId: "fir-crud-81dd0",
  storageBucket: "fir-crud-81dd0.appspot.com",
  messagingSenderId: "330017261587",
  appId: "1:330017261587:web:13d7dacda9603ac9a5d7e6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  onSnapshot,
};
