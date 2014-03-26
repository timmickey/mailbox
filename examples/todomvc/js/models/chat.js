/*global Todos, DS */
'use strict';

Todos.Chat = DS.Model.extend({
  createdAt: DS.attr('date'),
  ownerId: DS.attr('number'),
  roomId: DS.attr('number'),
  isFile: DS.attr('boolean'),
  msg: DS.attr('string'),
  file: DS.attr('string'),
});

