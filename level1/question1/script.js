function validateForm() {
  	var x = document.forms["myForm"]["fname"].value;
  	if (x == "") {
    	alert("Name must be filled out");
    	return false;
  }
		var y = document.forms["myForm"]["lname"].value;
		if (y == ""){
			alert("Last name must be filled out");
			return false;
	}
		function validateForm2() {
			const emailPattern = /^[a-z0-9.-_]+@[a-z0-9-]+\.[a-z.]{2,5}$/i;
			var validateEmail = emailPattern.test(document.getElementById('email').value);
	
			if (validateEmail !== true){
				alert("Please check if your Email is correct")
				return false;
		}		
		validateForm3();
	}
		function validateForm3() {
			const phonePattern = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{3})$/;
			var validatePhone = phonePattern.test(document.getElementById('phone').value);
	
			if (validatePhone !== true){
				alert("Please check if your Phone Number is correct. Have you remembered your country code?")
				return false;
		}
	}
	validateForm2();
	alert("Thank you for filling out this form correctly!")
}