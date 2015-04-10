// create an Array filled with objects containing victim information


var numVictims = 0;
var firstProceed = confirm("Do you have victim information to enter?");
if (firstProceed === true) {
	var victim = [];
do  {
	var victimName = prompt("Enter name of victim ");
	var victimPhone = prompt("Enter phone number of victim ");
	var victimStreet = prompt("Enter Street of victim ");
	var victimInfo = {
		name: victimName,
		phone: victimPhone,
		street: victimStreet
	};		
		victim.push(victimInfo);

	numVictims ++ ;
	var  proceed = confirm("Do you have victim information to enter?");

}

	
while (proceed === true);

}

//  Attempt at making a while loop without do and if
// var numVictims = 0;
// var proceed = confirm("Do you have victim information to enter?");
// while (proceed === true) {
// 	var victimName = prompt("Enter name of victim ");
// 	var victimPhone = prompt("Enter phone number of victim ");
// 	var victimStreet = prompt("Enter Street of victim ");
// 	var victimInfo = {
// 		name: victimName,
// 		phone: victimPhone,
// 		street: victimStreet
// 	}		
// 		victim.push(victimInfo);

// 	numVictims ++ 
// 	proceed = confirm("Do you have victim information to enter?");

// }




// create an Array that contains the victim Names
var victimNameList = [];
for (i = 0; i < numVictims; i++) {
	victimNameList.push(victim[i]["name"]);

}



console.log(victimNameList);


//  Create an array that contains objects containing volunteer Information

var numVolunteers = prompt("How many volunteers will be entered?");
var volunteer = [];
for (i=1; i <= numVolunteers; i++) {
	var  volunteerName = prompt("Enter name of volunteer " + i);
	var  volunteerPhone = prompt("Enter phone number of volunteer " + i);
	var  volunteerStreet = prompt("Enter street of volunteer " +i);
	var volunteerInfo = {
		name: volunteerName,
		phone: volunteerPhone,
		street: volunteerStreet
	};
		volunteer.push(volunteerInfo);
}

// Create an array that contains the volunteer names

var volunteerNameList = [];
for (i = 0; i < numVolunteers; i++) {
	volunteerNameList.push(volunteer[i]["name"]);
}



// Create an Alert with info

alert("Number of victims: " + numVictims
 	+ "\nNumber of volunteers: " + numVolunteers
	+ "\nVictim names: " + victimNameList.join(", ")
	+ "\nVolunteer names: " + volunteerNameList.join(", "));

// Bonus 2 Street match -- Match Victim 

// Prompt for the name of a victim to Match with Volunteer and
// Find out if there is a victim with that name and 
// Set var streetName = the street that victim lives on
var chosenVictim = prompt("What is the name of the victim you would like to match with a volunteer?");
var noVictim = false;
for (i = 0; i <= numVictims; i++) {
	if (i === numVictims) {
		alert("There is no victim by that name.");
		noVictim = true;
	} else if 	(victim[i].name === chosenVictim) {
		var streetMatch = victim[i].street;
		
		break;
	}
}

// Find volunteers with matching street to victim 
// Push to Names to Array variable streetMatchName
var streetMatchName = [];
for (i=0; i < numVolunteers; i++) {
	if(volunteer[i].street === streetMatch) {
		streetMatchName.push(volunteer[i].name);
	}
}

// Alert Either list of Volunteers with Matching street to victim street
// or Alert an error
if(noVictim === true) {
	alert("You must enter a valid victim name in order to match with a volunteer.");
} else{
	alert("Volunteers that are available on " + chosenVictim  + "'s street:\n" 
	+ streetMatchName.join(", ") );
}

// console.logs I used for testing
console.log("victim array", victim);
console.log("Number of victims: " + numVictims);
console.log("Volunteer Array: ", volunteer);
console.log("Names of volunteers with the same street: ", streetMatchName);
console.log("chosen victim " + chosenVictim);
