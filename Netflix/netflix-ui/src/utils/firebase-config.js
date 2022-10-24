
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDxlhwrTXfxIwuvrpX7W2W0KLsiovWzw04",
  authDomain: "react-netflix-clone-1c677.firebaseapp.com",
  projectId: "react-netflix-clone-1c677",
  storageBucket: "react-netflix-clone-1c677.appspot.com",
  messagingSenderId: "708648217006",
  appId: "1:708648217006:web:05051750322fd438f0c03f",
  measurementId: "G-3NBG5CNPJ5"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

