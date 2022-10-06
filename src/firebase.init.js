import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7TkbnLU3okpiSO7gnGsIwTDx9GQXf0sI",
  authDomain: "travel-guru-3fcd1.firebaseapp.com",
  projectId: "travel-guru-3fcd1",
  storageBucket: "travel-guru-3fcd1.appspot.com",
  messagingSenderId: "1093220946658",
  appId: "1:1093220946658:web:1b6933c1a22fd811ac04bb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
