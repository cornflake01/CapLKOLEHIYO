// Firebase configuration
import firebase from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Function to handle form submission
document.getElementById("announcementForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from form fields
    const title = document.getElementById("announcementTitle").value;
    const date = document.getElementById("announcementDate").value;
    const description = document.getElementById("announcementDescription").value;

    // Store announcement data in Firebase
    db.ref('announcements').push({
        title: title,
        date: date,
        description: description
    })
    .then(() => {
        // Display success message
        alert("Announcement added successfully");
        // Redirect to announcements.html
        window.location.href = "announcements.html";
    })
    .catch((error) => {
        console.error("Error adding announcement: ", error);
    });
});
