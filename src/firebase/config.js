import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv1asZIcdRy5P_UeRjevDbG8gXcnKR2Uw",
  authDomain: "nexis-d071c.firebaseapp.com",
  projectId: "nexis-d071c",
  storageBucket: "nexis-d071c.appspot.com",
  messagingSenderId: "521349857842",
  appId: "1:521349857842:web:02a9d58b3f5c24ae9cb22b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectfirestore = firebase.firestore();

export {projectStorage, projectfirestore};