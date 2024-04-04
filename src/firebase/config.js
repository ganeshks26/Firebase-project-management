import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_KTBc8SwbTDX0DkiR2vn9XWYCerLmHoo",
  authDomain: "project-management-b041b.firebaseapp.com",
  projectId: "project-management-b041b",
  storageBucket: "project-management-b041b.appspot.com",
  messagingSenderId: "490852212940",
  appId: "1:490852212940:web:43d38ffe12539fdc08a269",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
