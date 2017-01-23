import firebase from 'firebase';

try {
	var config = {
	    apiKey: "AIzaSyCmieq2RMDu_lhAyNH3CWZWCjVahp9s0ao",
	    authDomain: "react-todo-app-3235c.firebaseapp.com",
	    databaseURL: "https://react-todo-app-3235c.firebaseio.com",
	    storageBucket: "react-todo-app-3235c.appspot.com",
	    messagingSenderId: "872112226779"
	};

	firebase.initializeApp(config);

} catch (e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;