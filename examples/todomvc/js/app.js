/*global Ember, DS, Todos:true */
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: new Firebase("https://kicktodo.firebaseio.com/")
});
