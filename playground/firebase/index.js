import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBFvsmx-6h-7M2kkN90qrCy_WUWWQaKNRg",
  authDomain: "hal-todo-app.firebaseapp.com",
  databaseURL: "https://hal-todo-app.firebaseio.com",
  storageBucket: "hal-todo-app.appspot.com",
  messagingSenderId: "208651802092"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.2.3'
  },
  isRunning: true,
  user: {
    name: 'Hal',
    age: 61
  }
});



// firebaseRef.set({
//   app: {
//     name: 'Todo App',
//     version: '1.0.0'
//   },
//   isRunning: true,
//   user: {
//     name: 'Andrew',
//     age: 25
//   }
// }).then(() => {
//   console.log('Set worked!');
// }, (e) => {
//   console.log('Set failed');
// })

// firebaseRef.set({
//   appName: 'Todo Application'
// });

// firebaseRef.child('user').set({
//   name: 'Mike'
// });
//
// firebaseRef.child('app').set({
//   name: 'Todo App'
// });


// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Jen'
// })

// firebaseRef.child('app').update({ name: 'Todo Application' });
// firebaseRef.child('user').update({ name: 'Mike' });

// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('user changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({ name: 'Mike' });
// firebaseRef.child('app').update({ name: 'App name 2' });

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNotesRef = notesRef.push();
// newNotesRef.set({
//   text: 'Walk the dog'
// });
//or
// var newNotesRef = notesRef.push({text: 'Feed the cat'});
// console.log('Todo id', newNotesRef.key);

// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({text: 'Feed the dog'});
// todosRef.push({text: 'Lockup the birds'});
