function GroupController () {

    var group = new Group();
    
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
		    div_el = $("#common"),
			ul_el = $(".list"),
		    group_name = "Group Dp-056-UI",
			li_el = [],
		    i = 0;
			
        div_el.text(group_name);
		
        for (i = 0; i < students.length; i++) {
		    person_controller[i] = new PersonController(students[i]);
			ul_el.append("<li>"+person_controller[i].toString()+"</li>");  
        }       
    }

	return this;
}