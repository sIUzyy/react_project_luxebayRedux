// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWzMVUsjjAmiPLrF0ta0RZNgtWc9rFcdc",
  authDomain: "luxebay-ecommerce.firebaseapp.com",
  projectId: "luxebay-ecommerce",
  storageBucket: "luxebay-ecommerce.appspot.com",
  messagingSenderId: "260226734686",
  appId: "1:260226734686:web:373a068eeed927bdddb2cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//for authentication purposes.
export const auth = getAuth(app)

