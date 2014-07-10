var GroupController = Backbone.View.extend({
	
	collection: new Group(),
	
    initialize: function () {
		this.render();	
	},
	
	render: function () {
		this.collection.each(this.renderOne, this);
	},
	
	renderOne: function (person) {
	    var  person_controller = new PersonController({model: person});
		
		this.$el.append(person_controller.render());	
	} 
});
