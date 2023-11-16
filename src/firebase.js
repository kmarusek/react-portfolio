import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAu6n7eAAAY4nRG6-mzy27Hyzs2EqTZfnw",
  authDomain: "portfolio-dashboard-react.firebaseapp.com",
  projectId: "portfolio-dashboard-react",
  storageBucket: "portfolio-dashboard-react.appspot.com",
  messagingSenderId: "923610137422",
  appId: "1:923610137422:web:53e05e6223c15282d6541f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);