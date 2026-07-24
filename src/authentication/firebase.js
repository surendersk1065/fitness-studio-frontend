import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDRVnBFA17bUohlY6LVZDSdyy9O4RtKdQo",
  authDomain: "fitness-studio-45a71.firebaseapp.com",
  projectId: "fitness-studio-45a71",
  storageBucket: "fitness-studio-45a71.firebasestorage.app",
  messagingSenderId: "364143374689",
  appId: "1:364143374689:web:0a38fb5cc4d15a43a51520"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvier = new GoogleAuthProvider()

