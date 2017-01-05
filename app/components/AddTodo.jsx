var React = require('react');

var AddTodo = React.createClass({

	handleSubmit: function(e) {
		e.preventDefault();
		var todotext = this.refs.todotext.value;

		if (todotext.length > 0) {
			this.refs.todotext.value = '';
			this.props.onAddTodo(todotext);
		} else {
			this.refs.todotext.focus();
		}
	},

	render: function () {
		return(
			<div>
				<form ref="form" onSubmit={this.handleSubmit} className="todo-form">
					<input type="text" ref="todotext" className="" placeholder="What do you need to do?"/>
					<button className="button hollow expanded">Add to do</button>
				</form>
			</div>
		);
	}

});

module.exports = AddTodo;