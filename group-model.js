function Group () {  
    var group = [];

    this.addStudent = function (person) {
	    group.push(person);
	};
				
    this.getStudents = function () {
	    return group;
    };
	
    return this;
}	    
