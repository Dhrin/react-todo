import firebase from 'firebase';

// Create project in firebase and go to database/rules then set .read and .write to true
// Back to Overview go to Add Firebase to .... then copy var config
// -------------------------------------------------------------------------------------

var config = {
    apiKey: "AIzaSyCmieq2RMDu_lhAyNH3CWZWCjVahp9s0ao",
    authDomain: "react-todo-app-3235c.firebaseapp.com",
    databaseURL: "https://react-todo-app-3235c.firebaseio.com",
    storageBucket: "react-todo-app-3235c.appspot.com",
    messagingSenderId: "872112226779"
};

// then run firebase on config 

firebase.initializeApp(config);

// Create shorthand for firebase.database().ref() => firebaseRef

var firebaseRef = firebase.database().ref();

// .SET ---- CREATE DATA
// ------------------------------------------------------------------------------------

firebaseRef.set({
	app: {
		name: 'Todo App',
		version:  '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Dhrin',
		age: 33
	}
});

var todosRef = firebaseRef.child('Todos');

var addTodoRefs = todosRef.push();

todosRef.on('child_added', (snapshot) => {
	console.log('Added ', snapshot.key, ' is ', snapshot.val());
});

addTodoRefs.set({
	todo: 'Walk the cat'
});





// // This var will set firebase to generate unique-id as reference for noteRef under parent name notes
// // ----------------------------------------------------------------------------------------------------
// var notesRef = firebaseRef.child('notes');

// // child_added/changed/removed ---- event listener for child
// // ------------------------------------------------------------------------------------
// notesRef.on('child_added', (snapshot) => {
// 	console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
// 	console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
// 	console.log('child_removed', snapshot.key, snapshot.val());
// });

// // this var will let function newNoteRef to ".push" data to noteRef(unique-id under notes)
// // .push --- create new item at the reference and return the data
// // ----------------------------------------------------------------------------------------

// var newNoteRef = notesRef.push();
// newNoteRef.set({
// 	text: 'Walk the dog'
// })
// // short hand of the above function --------------------------------------------------------

// var newNoteRef = notesRef.push({
// 	text: 'Walk the dog!'
// });

// console.log('Todo is', newNoteRef.key[7]);

// use .then/else to consloe.log when function work or fail
// ----------------------------------------------------------------------------------------

// firebaseRef.update({
// 	'app/name': 'Todo Application',
// 	'user/name': 'Anan'
// }).then (() => {
// 	console.log('Update names success');
// }, (e) => {
// 	console.log('Update names error');
// });

// .ON ----- FETCHING DATA ON LISTENED EVENTS
// -------------------------------------------------------------------------------------

// firebaseRef.child('user').on('value', (snapshot) => {
// 	console.log('On value', snapshot.val());
// });

// firebaseRef.on('value', (snapshot) => {
// 	console.log('Got value', snapshot.val());
// });

// var logData = (snapshot) => {
// 	console.log('Got value', snapshot.val());
// };

// firebaseRef.on('value', logData);

// Off to all listener ---------

// firebaseRef.off();

// Off to specific object ----------

// firebaseRef.off('value', logData);

// ,ONCE ----- FETCHING DATA
// -------------------------------------------------------------------------------------

// firebaseRef.once('value');

// firebaseRef.child('app').once('value');


// .UPDATE ----- UPDATE DATA
// -------------------------------------------------------------------------------------

// firebaseRef.update({
// 	'app/name': 'Todo Application',
// 	'user/name': 'Anan'
// });

// firebaseRef.child('app').update({
// 	version: '1.0.1',
// 	ID: 2
// });

// .REMOVE ---- REMOVE DATA
// -------------------------------------------------------------------------------------

// firebaseRef.child('app/name').remove();

// REMOVE DATA ----- BY UPDATE : NULL
// -------------------------------------------------------------------------------------

// firebaseRef.child('app').update({
// 	version: null
// });









