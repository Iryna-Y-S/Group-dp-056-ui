function GroupController () {

    var group = new Group();
    
    studentsInit();
    
	function studentsInit () {
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
	
	    var $el = $(".list"),   
		    person_controller,
			person,
		    i = 0;
	
		$.each(students, function(i, person){
		
		    person_controller = new PersonController(person),
			
		    $el.append(person_controller.toString()); 	
		});	
	}

	return this;
}