import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  onValue,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
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
const db = getDatabase(app);
const auth = getAuth();
function getUserForm(e) {
  e.preventDefault();
  const name = userForm.name.value;
  const email = userForm.email.value;
  const password = userForm.password.value;
  addData(name, email, password);
}
function addData(name, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(db, "users/" + user.uid), {
        name: name,
        email: email,
        password: password,
      });
      alert("Created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

const userForm = document.getElementById("form-add-user");
userForm.addEventListener("submit", getUserForm);

function getLoginForm(e) {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;
  setPersistence(auth, browserSessionPersistence);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Signed");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

const loginForm = document.getElementById("form-login");
loginForm.addEventListener("submit", getLoginForm);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // ...
    console.log(user);
  } else {
    // User is signed out
    // ...
  }
});

const btnOut = document.getElementById("log-out");
btnOut.addEventListener("click", handleLogOut);

function handleLogOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("User Log out");
    })
    .catch((error) => {
      // An error happened.
    });
}
