/*
George Dacosta
SDI 1212
Project 2
November 29, 2012
*/

//Variables

var ourTrip = "New York City";
var ourAttractions = [
					"Museum of Modern Art",
					"Central Park",
					"Top of the Rock",
					"Ground Zero",
					"Statue of Liberty",
					"Empire State Building",
					"Times Square"
];
var transport = [
				"Taxi",
				"Subway",
				"City Bus",
				"Tourist Bus",
				"walk"	
];
var budgetPerTickets = 200;
var costPerTicket = 75;
var yes = true;
var no = false;
var milesWalked = 5;


//Procedure

var whereToGo = function(whereToTravel){
	whereToTravel = ourTrip;
	if (whereToTravel === "New York City"){
		console.log("We are going to " + ourTrip + " for vacation!");
		
		} else {
			
		console.log("Sadly, we canot go to " + ourTrip + " at this time.");
		};
		
};

whereToGo();