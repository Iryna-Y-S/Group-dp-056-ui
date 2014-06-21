function Person () {
    var attributes = {};
	
	this.setAttributes = function (name, gender, skype) {
		attributes["name"] = name;
		attributes["gender"] = gender;
		attributes["skype"] = skype;
	};
		 
	this.getAttributes = function () {
	    return attributes;
	};
	  
	return this;
}	

