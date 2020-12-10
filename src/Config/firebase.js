import firebase from "firebase/app";
import "firebase/firestore";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDtKtWjaajzbaZq-IMpbGwe1i-6eOz6UnE",
  authDomain: "rissoto-ab799.firebaseapp.com",
  databaseURL: "https://rissoto-ab799.firebaseio.com",
  projectId: "rissoto-ab799",
  storageBucket: "rissoto-ab799.appspot.com",
  messagingSenderId: "66206929562",
  appId: "1:66206929562:web:fb0aea5ef3ee23db1c4523",
};
firebase.initializeApp(config);
export const firestore = firebase.firestore();
export default firebase;
