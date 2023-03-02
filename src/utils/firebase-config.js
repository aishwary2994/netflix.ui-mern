
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBcoFCicE-OVLhe5-UpYNF3xxJpn56mK9k",
  authDomain: "react-netflix-clone-28be3.firebaseapp.com",
  projectId: "react-netflix-clone-28be3",
  storageBucket: "react-netflix-clone-28be3.appspot.com",
  messagingSenderId: "706214087554",
  appId: "1:706214087554:web:0e14c72c5c6f557ee39d9b",
  measurementId: "G-0HSP6F7SPP"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)