  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB3F2p8N7h8FgU8CoO5aSoBiY5Q35hdzfw",
    authDomain: "book-78d89.firebaseapp.com",
    projectId: "book-78d89",
    storageBucket: "book-78d89.appspot.com",
    messagingSenderId: "96645080057",
    appId: "1:96645080057:web:21ec046c5ac4716d38d328",
    measurementId: "G-7F7HTLT9YC"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);