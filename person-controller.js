function PersonController (person) {
	
    this.toString = function () {
	    var li_elem = "", 
		    key;
			
		for (key in person.getAttributes()) {
	        li_elem += person.getAttributes()[key] + " ";
	    }
		
        return li_elem;
    };
	
    return this;
}