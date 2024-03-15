// Function to initialize Firebase and add announcement
function initializeFirebaseAndAddAnnouncement() {
    // Initialize Firebase
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

    // Reference to Firebase database
    const database = firebase.database();

    // Function to add announcement
    function addAnnouncement(title, date, description) {
        // Push data to Firebase
        const newAnnouncementRef = database.ref('announcements').push({
            title: title,
            date: date,
            description: description
        });

        // Listen for completion of the write operation
        newAnnouncementRef.then(() => {
            // Show confirmation popup
            alert('Announcement added successfully.');
            // Redirect to announcements page
            window.location.href = 'announcements.html';
        }).catch(error => {
            console.error("Error adding announcement: ", error);
        });
    }

    // Handle form submission
    document.getElementById('announcementForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const title = document.getElementById('announcementTitle').value;
        const date = document.getElementById('announcementDate').value;
        const description = document.getElementById('announcementDescription').value;

        // Log the form values (for debugging)
        console.log("Title:", title);
        console.log("Date:", date);
        console.log("Description:", description);

        // Add announcement to Firebase
        addAnnouncement(title, date, description);
    });
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeFirebaseAndAddAnnouncement);
