import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpo_0oidTBEG59u9ahFBioNFFS2Y_-ybI",
  authDomain: "clone-ce639.firebaseapp.com",
  databaseURL: "https://clone-ce639.firebaseio.com",
  projectId: "clone-ce639",
  storageBucket: "clone-ce639.appspot.com",
  messagingSenderId: "56066099535",
  appId: "1:56066099535:web:89884a7c5a260f91731d3a",
  measurementId: "G-2X34BK3H9M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };