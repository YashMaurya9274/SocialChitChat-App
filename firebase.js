import {getApp, getApps, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALeeM6H0NirvpFNPLLJoscsyLrl0ejofg',
  authDomain: 'chat-app-rn-f6a99.firebaseapp.com',
  projectId: 'chat-app-rn-f6a99',
  storageBucket: 'chat-app-rn-f6a99.appspot.com',
  messagingSenderId: '98615996231',
  appId: '1:98615996231:web:4aea4734a6b3d2d1392662',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const db = getFirestore();

export {app, auth, db};
