import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_IMP,
  authDomain: "contactformreact-4dcbf.firebaseapp.com",
  databaseURL: "https://contactformreact-4dcbf-default-rtdb.firebaseio.com",
  projectId: "contactformreact-4dcbf",
  storageBucket: "contactformreact-4dcbf.appspot.com",
  messagingSenderId: "956419397130",
  appId: "1:956419397130:web:a805340a50cecf1be571f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();