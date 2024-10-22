// Import the required Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyBUmtpKX7jFGL65xGzq8WnZN2mjgn7zWIY",
  authDomain: "challenge-bfad2.firebaseapp.com",
  projectId: "challenge-bfad2",
  storageBucket: "challenge-bfad2.appspot.com",
  messagingSenderId: "841821576657",
  appId: "1:841821576657:web:2a8c706cba0c2a0a4d14f0",
  measurementId: "G-RYQ8LLESHR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(firebaseApp);

// Get an Auth instance
const auth = getAuth(firebaseApp);

export { db, auth };
