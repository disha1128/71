import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCkxk6Ql7vIvh7V9BsHw2u2TO50HCDKkqs",
    authDomain: "pro71-fd865.firebaseapp.com",
    projectId: "pro71-fd865",
    storageBucket: "pro71-fd865.appspot.com",
    messagingSenderId: "891890683260",
    appId: "1:891890683260:web:19347ee05546bb9315e8f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();