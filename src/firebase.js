import firebase from "firebase/app";
import "firebase/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpg5Is8EkqwFX9nCHz-XaLsKahRojaprI",
  authDomain: "autosave-fdb67.firebaseapp.com",
  databaseURL: "https://autosave-fdb67.firebaseio.com",
  projectId: "autosave-fdb67",
  storageBucket: "autosave-fdb67.appspot.com",
  messagingSenderId: "758850154930",
  appId: "1:758850154930:web:e65ccfb9452def611c74ab",
});
const db = firebaseApp.firestore();
export { db };
