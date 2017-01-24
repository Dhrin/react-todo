import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from 'app/firebase/';

import TodoApp from 'TodoApp';
import Login from 'Login';

// Middleware that kick user back if they not loged in
var requireLogin = (nextState, replace, next) => {
	if (!firebase.auth().currentUser) {
		replace('/');
	}
	next();
};

var redirectIfLogin = (nextState, replace, next) => {
	if (firebase.auth().currentUser) {
		replace('/todos');
	}
	next();
};

export default (
	<Router history = {hashHistory}>
        <Route path="/">
            <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
            <IndexRoute component={Login} onEnter={redirectIfLogin}/>
        </Route>
   	</Router>
);





