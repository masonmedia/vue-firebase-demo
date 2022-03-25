// All the vue tuts add firebase and firestore imports and as well as non intuitive
// const exports
// The firestore code provided is all that's needed with a small tweak adding
// the main db const export

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBujjN0yLczJ7KG8na0Y29vSlfQhFi26U",
  authDomain: "vue-firebase-b82e8.firebaseapp.com",
  projectId: "vue-firebase-b82e8",
  storageBucket: "vue-firebase-b82e8.appspot.com",
  messagingSenderId: "425870406539",
  appId: "1:425870406539:web:e394a0d62f8d42e247f58e"
};

// Initialize Firebase 
// export a constant that is then imported in individual files to access the firebase db
export const database = initializeApp(firebaseConfig);

