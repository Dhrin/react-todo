var expect = require('expect');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var actions = require('actions');

var creatMockStore = configureMockStore([thunk]);

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
			todo: {
				id: '123abd',
				text: 'bla bla',
				completed: false,
				createdAt: 0
			}
		};
		var res = actions.addTodo(action.todo);
		expect(res).toEqual(action);
	});

	it('should create todo and dispatch addtodo', (done) => {
		const store = creatMockStore({});
		const todoText = 'My todo item'

		store.dispatch(actions.startAddTodo(todoText)).then(() => {
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			});
			expect(actions[0].todo).toInclude({
				text: todoText
			});
			done();
		}).catch(done);
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