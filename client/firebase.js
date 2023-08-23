// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChsd0N_7o7EHXFtyy2ZP-mYtWjbXcF7eo",
  authDomain: "clone-f34f8.firebaseapp.com",
  projectId: "clone-f34f8",
  storageBucket: "clone-f34f8.appspot.com",
  messagingSenderId: "713999747821",
  appId: "1:713999747821:web:450e0d640b8ab6b8df9ae4",
  measurementId: "G-NGG4TNYXXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
