//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDbuuuFu8G-j2G3SBkPLLqOjIe8-9B-Nlg",
  authDomain: "comp1800-2024-demo07.firebaseapp.com",
  projectId: "comp1800-2024-demo07",
  storageBucket: "comp1800-2024-demo07.appspot.com",
  messagingSenderId: "939630844455",
  appId: "1:939630844455:web:2755d6021cd5cea0c1cc02"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
