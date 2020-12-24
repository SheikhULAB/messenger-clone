import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDywjPjiiT10Jqc5mxTJLzaEnexK5-bZbM",
  authDomain: "messenger-clone-f1d98.firebaseapp.com",
  projectId: "messenger-clone-f1d98",
  storageBucket: "messenger-clone-f1d98.appspot.com",
  messagingSenderId: "131601677989",
  appId: "1:131601677989:web:8dfbb1002b7a1b7ab9974c",
  measurementId: "G-NFSQJJ01HW"
});

const db = firebaseApp.firestore();

export default db;