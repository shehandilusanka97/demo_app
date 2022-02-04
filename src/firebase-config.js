import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgBne-aLnUcnMNVUA4C1pMxfxClQfNdLE",
    authDomain: "rmad-f9511.firebaseapp.com",
    projectId: "rmad-f9511",
    storageBucket: "rmad-f9511.appspot.com",
    messagingSenderId: "427631042630",
    appId: "1:427631042630:web:721f3013003601fb19aa47",
    measurementId: "G-TX6ZTGQMGL"
  };
  const app = initializeApp(firebaseConfig);

  export const db=getFirestore(app);