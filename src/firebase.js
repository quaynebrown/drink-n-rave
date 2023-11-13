import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzUb5P54z60lsAiJ8Od_V7hKV_L0V_OrQ",
  authDomain: "drink-n-rave.firebaseapp.com",
  projectId: "drink-n-rave",
  storageBucket: "drink-n-rave.appspot.com",
  messagingSenderId: "312069068249",
  appId: "1:312069068249:web:afeafc1d978ec5260e35c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);