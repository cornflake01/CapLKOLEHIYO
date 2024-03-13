// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"; // Update import statement for Auth functionality

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4SI2yXymjL4cwtVvKtCxGTQOeMvU968w",
    authDomain: "l-kolehiyo-capstone.firebaseapp.com",
    databaseURL: "https://l-kolehiyo-capstone-default-rtdb.firebaseio.com",
    projectId: "l-kolehiyo-capstone",
    storageBucket: "l-kolehiyo-capstone.appspot.com",
    messagingSenderId: "1032233320347",
    appId: "1:1032233320347:web:109c19d37aec6d0364eb3e",
    measurementId: "G-D5R84EF8KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app); // Initialize Firebase Auth

document.getElementById("createForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const lrn = document.getElementById("lrn_number").value;
    const email = document.getElementById("email").value;
    const strand = document.getElementById("strand").value;
    const grade = document.getElementById("grade").value;
    const section = document.getElementById("section").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    addStudent(name, lrn, email, strand, grade, section, username, password);
});

function addStudent(name, lrn, email, strand, grade, section, username, password) {
    createUserWithEmailAndPassword(auth, email, password) // Use 'auth' instead of 'app.auth()'
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(db, 'students/' + user.uid), { // Use 'user.uid' instead of 'user.email'
                name: name,
                lrn: lrn,
                email: email,
                strand: strand,
                grade: grade,
                section: section,
                username: username,
                password: password
            }).then(() => {
                console.log("Student added successfully.");
                document.getElementById("createForm").reset();
                window.location.href = "studentinfo.html"; // Redirect to studentinfo.html
            }).catch((error) => {
                console.error("Error adding student: ", error);
            });
        })
        .catch((error) => {
            console.error("Error creating user: ", error);
        });
}

function goToDashboard() {
    window.location.href = "dashboard.html";
}
