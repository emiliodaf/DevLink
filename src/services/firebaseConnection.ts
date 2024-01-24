import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCO2FDQXEGjvVEZys2H7EGg24pQKFMjJ9c",
  authDomain: "reactdevlinks.firebaseapp.com",
  projectId: "reactdevlinks",
  storageBucket: "reactdevlinks.appspot.com",
  messagingSenderId: "466856258546",
  appId: "1:466856258546:web:5439f40fbea295bc69d96b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };
