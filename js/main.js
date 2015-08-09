function askQuestions() {

	var firstName = prompt("What is your first name?");
	var lastName = prompt("What is your last name?");

	var fullName = firstName +" " + lastName;

	$('h2').text("Hello "+fullName);

	var userAge = prompt("How old are you?");
	userAge = parseInt(userAge);

	if (userAge >= 18) {
		// Do something
		console.log("User is an adult");
	} else if (userAge>= 13) {
		console.log("User is a teenager");
	}else {
		console.log("Go away child!");
	}


	if (firstName.toLowerCase() == "general" && lastName != "assembly") {
		console.log("Hello General!");
	}

	var faveColour = prompt("What is your favourite colour?");
	if (faveColour.toLowerCase() == "red"||
		faveColour.toLowerCase() == "green"||
		faveColour.toLowerCase() == "blue"||
		faveColour.toLowerCase() == "yellow") {
		$("h2").css('background-color', faveColour);
	}

}


//When the page has loaded
$(function() {

	$("img").on("click", askQuestions);

	// Get all the sections
	var sections =$('h3').next();

	// Hide all the sections
	sections.hide();

	// When the user clicks an h3
	$('h3').on('click', function() {

		// Remember the section the user wants to see
		var thisSection =$(this).next();

		// Hide all the sections except the one the user wants to see
		// sections.not(thisSection).slideUp();

		// Toggle the one the user wants to see
		thisSection.slideToggle();

	});



});
