/*global Todos, Ember */
'use strict';

Todos.TodoView = Ember.View.extend({
	classNames: ['todo', 'isSelected:selected'],
	click: function(evt){
		$('.todo').removeClass('selected');
		this.$().addClass('selected');
	},
	doubleClick: function(evt){
		this.get('controller').send('editTodo');
	}
});
