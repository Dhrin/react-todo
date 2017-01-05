var React = require('react');

var Todo = React.createClass ({
	render: function () {

		var {id, text} = this.props;

		return (
			<div>
				<h4>{id}. {text}</h4>
			</div>
		)
	}
});

module.exports = Todo;