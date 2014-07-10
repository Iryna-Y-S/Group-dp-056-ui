var PersonController = Backbone.View.extend({

	template: _.template("<li><%= name %> <%= gender %> <%= skype %> </li>"),

    render: function () {
	    return this.template(this.model.toJSON());
	}
});
