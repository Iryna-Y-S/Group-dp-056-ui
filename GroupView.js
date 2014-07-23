var GroupView = Backbone.View.extend({
	
	collection: new Group(),
	
	events: {
	    "click #add": "addStudent"
	},
	
    initialize: function () {
		this.render();		
		mediator.sub("StudentView:delete", this.render, this);
	},

	render: function () {
	    this.$el.find("li").remove();
		this.collection.each(this.renderOne, this);
	},
	
	renderOne: function (person) {
	    var student_view = new StudentView({model: person});
		this.$el.find("#list").append(student_view.render().el);
	},
	
	addStudent: function () {
		mediator.pub("NewStudentView:open", "student");
		mediator.sub("NewStudentView:add", this.addToGroup, this);
	},
	
	addToGroup: function (student) {
	    this.model = student;
	    this.collection.push(this.model);
		this.render();
	}
});
