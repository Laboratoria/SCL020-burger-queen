// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyVA0cihYgcrlN_4rWGNbo-YjSY7YnDUE",
  authDomain: "sushi-queens-df5bb.firebaseapp.com",
  projectId: "sushi-queens-df5bb",
  storageBucket: "sushi-queens-df5bb.appspot.com",
  messagingSenderId: "910627320516",
  appId: "1:910627320516:web:78c184dc5d0cb771608f91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
