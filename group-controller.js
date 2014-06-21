function GroupController () {

    var group = new Group(),
        div_element = document.getElementById("common"),
        ul_element = document.createElement("ul");
    
    studentsInitialization();
    
	function studentsInitialization () {
		var aleks = new Person(),
	        anton = new Person(),
		    illya = new Person(), 
		    ira = new Person(), 
		    natasha = new Person(),
			
			students = [aleks, anton, illya, ira, natasha];
			
        aleks.setAttributes("Aleks", "male", "cosmopeon");
	    anton.setAttributes("Anton", "male", "plewakofff");
	    illya.setAttributes("Illya", "male", "ilyaillich");
	    ira.setAttributes("Ira", "female", "aphrodite_i");
	    natasha.setAttributes("Natasha", "female", "lisentia_dp");

	    group.addStudent(students);
	  				
		showStudents(students);		
	} 	
	 
    function showStudents(students) {
        var person_controller = [],
		    i = 0,
            li_element;
			
        div_element.innerHTML = "Group Dp-056-UI";
		
        for (i = 0; i < students.length; i++) {
		    person_controller[i] = new PersonController(students[i]);
			
            li_element = document.createElement("li");
            li_element.innerHTML = person_controller[i].toHTML();
            ul_element.appendChild(li_element);
        }
        div_element.appendChild(ul_element);
   
}

	return this;
}