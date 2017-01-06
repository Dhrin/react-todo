var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({

	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Clean the yard'
				}, {
					id: 3,
					text: 'Go to sleep'
				}, {
					id: 4,
					text: 'Take a  bath'
				}
			]
		};
	},

	handleAddTodo: function (text) {
		alert('new todo: ' + text);
	},

	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText
		});
	},

	render: function () {

		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports= TodoApp;