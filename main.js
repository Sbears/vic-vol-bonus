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
	}		
		victim.push(victimInfo);

	numVictims ++ 
	var  proceed = confirm("Do you have victim information to enter?");

}

	
while (proceed === true);

}

console.log(victim);
console.log("Number of victims: " + numVictims);

//create an Array that contains the victim Names
var victimNameList = [];
for (i = 0; i < numVictims; i++) {
	victimNameList.push(victim[i]["name"]);

}



console.log(victimNameList);





//  Create an array that contains objects containing volunteer names

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
	}
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

// Bonus 2 Street match

// prompt("Enter the name of a victim to match with a volunteer.")

// ??????????????????????????????????????????????????????????????
	// if (victimInfo.hasOwnProperty(Jon) === true) {
	// 	break;
	// }	
//???????????????????????????????????????????????????????????????????kkl;llkkljljk



