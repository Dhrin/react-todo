var $ = require('jquery');

module.exports = {
	// setTodos: function (todos) {
	// 	if ($.isArray(todos)) {
	// 		localStorage.setItem('todos', JSON.stringify(todos));
	// 		return todos;
	// 	}
	// },

	// getTodos: function () {
	// 	var stringTodos = localStorage.getItem('todos');
	// 	var todos = [];
		
	// 	try {
	// 		todos = JSON.parse(stringTodos);
	// 	} catch (e) {

	// 	}

	// 	return $.isArray(todos) ? todos : [];

	// 	// if ($.isArray(todos)) {
	// 	// 	return todos;
	// 	// } else {
	// 	// 	return [];
	// 	// }
	// },

	filterTodos: function (todos, showCompleted, searchText) {
		var filterTodos = todos;

		// Filter by showcompleted
		filterTodos = filterTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});
		// Filter by searchText
		filterTodos = filterTodos.filter((todo) => {
			var text = todo.text.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText) > -1;
		});
		// Sort todos with non-completed first
		filterTodos.sort((a, b) => {
			// return -1 mean a come before b, 1 mean b come before a, 0 mean nothing happen 
			if (!a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		return filterTodos;
	}
};