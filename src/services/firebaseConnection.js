import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: 'AIzaSyDbaEa7vhKixfHkUhqhAeUyigYhly_v6Zc',
  authDomain: 'sistema-c0f07.firebaseapp.com',
  projectId: 'sistema-c0f07',
  storageBucket: 'sistema-c0f07.appspot.com',
  messagingSenderId: '893130903826',
  appId: '1:893130903826:web:51a09a4fbb20565dffe3cb',
  measurementId: 'G-NEYNXDSX5P',
};
if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
