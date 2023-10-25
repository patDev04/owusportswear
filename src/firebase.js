import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {} from 'firebase/auth';
// import * as firebase from './firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4SCOT2kgzXjJ0Tq8vlhKEgPw6ioKsr_c',
  authDomain: 'owusportswear.firebaseapp.com',
  projectId: 'owusportswear',
  storageBucket: 'owusportswear.appspot.com',
  messagingSenderId: '674967755790',
  appId: '1:674967755790:web:61df4d7ff006bc4e3af05f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exports
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
