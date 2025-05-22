import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCwoYk50AqY_ALvsJdO-1GwL__TFBF02Ms',
  authDomain: 'auth-router-1a706.firebaseapp.com',
  projectId: 'auth-router-1a706',
  storageBucket: 'auth-router-1a706.firebasestorage.app',
  messagingSenderId: '1040465602944',
  appId: '1:1040465602944:web:34c7fc0a30d46fc1f13965',
  measurementId: 'G-62B2VJ8NJN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
