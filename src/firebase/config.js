import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjweOEH6lzEoLdwyRtLOo4-4fRh8ZNqu0",
  authDomain: "music-list-sample.firebaseapp.com",
  projectId: "music-list-sample",
  storageBucket: "music-list-sample.appspot.com",
  messagingSenderId: "250009155697",
  appId: "1:250009155697:web:4d7a4855c6ea5d5ce743d0",
};

firebase.initializeApp(firebaseConfig);

// Services
const firestore = firebase.firestore();
const fireauth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, fireauth, timestamp };
