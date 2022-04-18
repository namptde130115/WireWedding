import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCJbNOdRPD---KbIJjwVNqJthdD0EUmMFE',
  authDomain: 'notmailfptgotoubun.firebaseapp.com',
  databaseURL: 'https://notmailfptgotoubun.firebaseio.com',
  projectId: 'notmailfptgotoubun',
  storageBucket: 'notmailfptgotoubun.appspot.com',
  messagingSenderId: '884141813391',
  appId: '1:884141813391:web:a2b06b2642a849cb894afa',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
