import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBHlD5TfdCLFLRrNGhylBz0BcjgCkwroE",
  authDomain: "revents-66756.firebaseapp.com",
  databaseURL: "https://revents-66756.firebaseio.com",
  projectId: "revents-66756",
  storageBucket: "revents-66756.appspot.com",
  messagingSenderId: "576208239445"
};

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
export default firebase