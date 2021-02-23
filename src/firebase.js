// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCBG6Og6O4qTvHGB2i-wGlRYUbJRb-9U_g",
    authDomain: "challenge-2f967.firebaseapp.com",
    projectId: "challenge-2f967",
    storageBucket: "challenge-2f967.appspot.com",
    messagingSenderId: "573962058793",
    appId: "1:573962058793:web:dee9cf15cb9c981f17b038",
    measurementId: "G-5Z8SFTNXSQ"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export { db, auth };