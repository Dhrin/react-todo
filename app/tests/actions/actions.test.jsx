var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
	it('should generante search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		};
		var res = actions.setSearchText(action.searchText);
		expect(res).toEqual(action);
	});

	it('should generante add todo action', () => {
		var action = {
			type: 'ADD_TODO',
			text: 'Sleep'
		};
		var res = actions.addTodo(action.text);
		expect(res).toEqual(action);
	});

	it('should generante toggleShowCompleted', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};
		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	});

	it('should generante toogle todo', () => {
		var action = {
			type: 'TOGGLE_TODO',
			id: 1
		};
		var res = actions.toggleTodo(action.id);
		expect(res).toEqual(action);
	});

	it('should generante add todos action obj', () => {
		var todos = [{
			id: '111',
			text: 'test',
			completed: false,
			completedAt: undefined,
			createdAt: 3300
		}];
		var action = {
			type: 'ADD_TODOS',
			todos
		};
		var res = actions.addTodos(action.todos);
		expect(res).toEqual(action);
	});
});