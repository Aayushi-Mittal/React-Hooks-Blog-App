import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC1CzjPYu01aqSy0DlaBSYCeduE3f7uMZw',
  authDomain: 'react-hooks-blog-9a960.firebaseapp.com',
  projectId: 'react-hooks-blog-9a960',
  storageBucket: 'react-hooks-blog-9a960.appspot.com',
  messagingSenderId: '647033901703',
  appId: '1:647033901703:web:f2d24a8acac1a2b5969e22',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();