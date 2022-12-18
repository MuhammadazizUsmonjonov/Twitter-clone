// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJSMNk5QNJW9bB0xOUj4nfjzxbIynkQP0",
    authDomain: "twitter-project-9eeb6.firebaseapp.com",
    projectId: "twitter-project-9eeb6",
    storageBucket: "twitter-project-9eeb6.appspot.com",
    messagingSenderId: "180955728123",
    appId: "1:180955728123:web:6cb2484757013b2999c85e"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };



