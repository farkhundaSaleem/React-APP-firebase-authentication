// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8tvG7hLku6WCB4Kn_UYri6JNVhiruyjY",
  authDomain: "new1-3ab9c.firebaseapp.com",
  projectId: "new1-3ab9c",
  storageBucket: "new1-3ab9c.appspot.com",
  messagingSenderId: "967319065637",
  appId: "1:967319065637:web:08c9e9d2921332ce3a1bcc",
  measurementId: "G-365DTBEZNH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);