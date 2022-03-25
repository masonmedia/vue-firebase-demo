// import firebase from "firebase/app";
// import "firebase/firestore";
// Named "vue-firebase" in cloud firestore // firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBujjN0yLczJ7KG8na0Y29vSlfQhFi26U",
  authDomain: "vue-firebase-b82e8.firebaseapp.com",
  databaseURL: "https://vue-firebase-b82e8-default-rtdb.firebaseio.com",
  projectId: "vue-firebase-b82e8",
  storageBucket: "vue-firebase-b82e8.appspot.com",
  messagingSenderId: "425870406539",
  appId: "1:425870406539:web:e394a0d62f8d42e247f58e"
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
