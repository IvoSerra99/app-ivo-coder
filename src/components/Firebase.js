// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUPm13orikodehJVvG5dl7gZU39JMaWv8",
  authDomain: "app-ivo-57307.firebaseapp.com",
  projectId: "app-ivo-57307",
  storageBucket: "app-ivo-57307.appspot.com",
  messagingSenderId: "640445557180",
  appId: "1:640445557180:web:dba2d65b954693c6bbe3b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);