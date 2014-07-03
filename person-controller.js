function PersonController (person) {
	
    this.toString = function () {
	    var li_elem,
		    string = "";
			
	    $.each(person.getAttributes(), function(i, person_info){
		    string += person_info + " ";
		});
		
		li_elem = "<li>" + string + "</li>";
	
		return li_elem;	
	};		
			
    return this;
}