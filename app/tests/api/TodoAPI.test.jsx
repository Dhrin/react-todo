var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{
				id:23,
				text: 'test',
				completed: false
			}];

			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});

		it('should not set invalid todos array', () => {
			var badTodos = {
				a: '23'
			};

			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('getTodos', () => {
		it('should return "" for bad localStorage data', () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('should return todos if valid array in localStorage', () => {
			var todos = [{
				id:23,
				text: 'test',
				completed: false
			}];

			localStorage.setItem('todos', JSON.stringify(todos));

			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);
		});
	});

	describe('filterTodos', () => {
		var todos = [{
			id: 1,
			text: 'test',
			completed: true
		}, {
			id: 2,
			text: 'test two',
			completed: false
		}, {
			id: 3,
			text: 'test three',
			completed: true
		}];

		it('should return all items if showCompleted is true', () => {
			var filterTodos =TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos.length).toBe(3);
		});

		it('should not return completed items if showCompleted is false', () => {
			var filterTodos =TodoAPI.filterTodos(todos, false, '');
			expect(filterTodos.length).toBe(1);
		});
	});
});




















