Todos.ApplicationView = Em.View.extend({
	didInsertElement: function(){
		$(document).keydown(function(event){
			if(event.which == 38){ // up
				var selected = $('.todo.selected');
				if(!selected)
					// selected = $('.todo:first-child');
				selected.next().addClass('selected');
				selected.removeClass('selected');
			}
			if(event.which == 40){ // down
				var selected = $('.todo.selected');
				$('.todo.selected').next('.todo').addClass('selected');
				selected.removeClass('selected');
				
			}
		});
	}
});