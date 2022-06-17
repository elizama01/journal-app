// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBra0EuykCjsn3jED-Itv9G47k70EO0fZI",
    authDomain: "react-cursos-3d135.firebaseapp.com",
    projectId: "react-cursos-3d135",
    storageBucket: "react-cursos-3d135.appspot.com",
    messagingSenderId: "392597141227",
    appId: "1:392597141227:web:c815f15941bb287238b0ae",
    measurementId: "G-84FVGB32PP"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const Analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);