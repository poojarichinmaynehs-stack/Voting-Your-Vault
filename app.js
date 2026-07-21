import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// Secret Configuration Setup
const firebaseConfig = {
  apiKey: "AIzaSyDgt_FpIn3fqUsSJGe7L7gr4wApPZEdMos",
  authDomain: "yourvault-f650c.firebaseapp.com",
  projectId: "yourvault-f650c",
  storageBucket: "yourvault-f650c.firebasestorage.app",
  messagingSenderId: "777606101043",
  appId: "1:777606101043:web:33e47a67decdf40c224b46",
  measurementId: "G-4V44MB54Y0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const nickname = document.getElementById("username").value.toLowerCase().trim();
    const secretEmail = nickname + "@vault.com"; // Background dynamic email trick
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, secretEmail, password)
        .then((userCredential) => {
            // Browser memory mein session store karna
            localStorage.setItem("vaultUser", nickname); 
            
            alert("Vault Unlocked! Welcome " + nickname + " ✨");
            window.location.href = "vault.html"; 
        })
        .catch((error) => {
            alert("Oops! Wrong Nickname ya Password. Entry Denied 🚫");
            console.log("Error details:", error.message);
        });
});
