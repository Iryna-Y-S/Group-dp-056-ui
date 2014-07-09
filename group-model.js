var Group = Backbone.Collection.extend({

    model: Person,

    initialize: function () {
			
        this.add({
		    "name": "Aleks", 
			"gender": "male",
			"skype": "cosmopeon"
		});
		
	    this.add({
		    "name": "Anton", 
			"gender": "male", 
			"skype": "plewakofff"
		});
		
	    this.add({
		    "name": "Illya", 
			"gender": "male", 
			"skype": "ilyaillich"
		});
		
	    this.add({
		    "name": "Ira", 
			"gender": "female", 
			"skype": "aphrodite_i"
		});
		
	    this.add({
		    "name": "Natasha", 
			"gender": "female", 
			"skype": "lisentia_dp"
		});	
    } 
});	    
