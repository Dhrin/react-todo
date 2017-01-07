var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo and create value in createAt', () => {
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		// Expect createAt toBe a number
		expect(todoApp.state.todos[0].createAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called and create value in completedAt', () => {
		var todoDate = {
			id: 11,
			text: 'Test feature',
			completed: false,
			createAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoDate]});

		expect(todoApp.state.todos[0].completed).toBe(false);

		todoApp.handleToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(true);
		// Expect completedAt to be a number
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	// test that when Toggle from true to false, completedAt get removed
	it('should toggle todo between completed to incompleted', (done) => {
		var todoDate = {
			id: 11,
			text: 'Test feature',
			completed: false,
			createAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoDate]});

		expect(todoApp.state.todos[0].completed).toBe(false);

		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');

		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toBe(undefined);
		done();
	});
});












