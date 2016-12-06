import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyBFvsmx-6h-7M2kkN90qrCy_WUWWQaKNRg",
    authDomain: "hal-todo-app.firebaseapp.com",
    databaseURL: "https://hal-todo-app.firebaseio.com",
    storageBucket: "hal-todo-app.appspot.com",
    messagingSenderId: "208651802092"
  };
} catch (e) {

}

firebase.initializeApp(config);

export var firebaseRef = firebase.database().ref();
export default firebase;
