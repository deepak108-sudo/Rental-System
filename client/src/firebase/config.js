// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMVvFIJgYCpfBAI8f2P54HniKocmsOffU",
  authDomain: "travel-d52c8.firebaseapp.com",
  projectId: "travel-d52c8",
  storageBucket: "travel-d52c8.appspot.com",
  messagingSenderId: "524875931258",
  appId: "1:524875931258:web:7039a0a23e4ecf5f8925c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();