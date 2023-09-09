import {
  auth,
  onAuthStateChanged,
  signOut,
  
} from "./fireBase-auth.js";
// ====================HANDLE AUTH=======================
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const createButton = document.getElementById("createButton");

    const authButtons = document.getElementById("authButtons");

    if (uid) {
      createButton.classList.add("block");
      authButtons.classList.add("hidden");
      authButtons.classList.remove("block");
    }
    const btnSignOut = document.getElementById("logOut");

    async function handleLogOut() {
      try {
        alert("Bạn có muốn đăng xuất tài khoản không ?");
        await signOut(auth);
      } catch (error) {
        console.log("🚀 ~ file: index.html:177 ~ handleLogOut ~ error:", error);
      }
    }
    btnSignOut.addEventListener("click", handleLogOut);
  } else {
    const createButton = document.getElementById("createButton");

    const authButtons = document.getElementById("authButtons");
    createButton.classList.add("hidden");
    authButtons.classList.add("block");
    authButtons.classList.remove("hidden");
  }
});

// ==========================RENDER POSTS===================

