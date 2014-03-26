/*global Ember, Todos */
'use strict';

Todos.Router.map(function () {
	this.resource('todos', { path: '/' }, function () {
		this.route('completed');
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('todo');
	}
});

Todos.TodosIndexRoute = Ember.Route.extend({
	setupController: function () {
		var todos = this.store.filter('todo', function (todo) {
			return !todo.get('isCompleted') && !todo.get('isRemoved');
		});
		this.controllerFor('todos').set('filteredTodos', todos);
	}
});

Todos.TodosCompletedRoute = Ember.Route.extend({
	setupController: function () {
		var todos = this.store.filter('todo', function (todo) {
			return todo.get('isCompleted') && !todo.get('isRemoved');
		});
		this.controllerFor('todos').set('filteredTodos', todos);
	}
});
