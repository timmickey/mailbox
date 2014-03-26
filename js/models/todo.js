/*global Todos, DS */
'use strict';

Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isHeader: DS.attr('boolean'),
	isCompleted: DS.attr('boolean'),
	isSelected: DS.attr('boolean'),
	isRemoved: DS.attr('boolean'),
	saveWhenCompletedChanged: function () {
		this.save();
	}.observes('isCompleted')
});
