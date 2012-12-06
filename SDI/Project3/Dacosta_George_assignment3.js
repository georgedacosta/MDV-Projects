/*
George Dacosta
SDI 1212
Project 3
December 6, 2012
*/
//json data

//Global Variables
var ourTrip = "New York City";
var ticketCost = 125;
var numberTickets = 2;
var game = "Yankees game";
var atBat = ["no score", "0-2", "1-2", "2-2", "3-2", "3-4", "3-6", "4-7", "Yankees Win!"];
var innings = {
	inning1: "",
	inning2: "",
	inning3: "",
	inning4: "",
	inning5: "",
	inning6: "",
	inning7: "",
	inning8: "",
	inning9: ""	
};

var json = {
	"players": [
		{
			"name": 	"Alex Rodriguez",
			"number": 	13,
			"position":	"third base",
			"nickName":	"AROD"
		},
				{
			"name": 	"Derek Jeter",
			"number": 	2,
			"position":	"short stop",
			"nickName":	"JETER"
		},

				{
			"name": 	"Eduardo Nunez",
			"number": 	26,
			"position":	"short stop",
			"nickName":	"NUNEZ"
		},
		
				{
			"name": 	"Mark Teixeira",
			"number": 	25,
			"position":	"first base",
			"nickName":	"TEX"
		},

				{
			"name": 	"Robinson Cano",
			"number": 	24,
			"position":	"second base",
			"nickName":	"CANO"
		}

	]	
};

//Procedure

var whatToDo = function(ourTrip){
	if (ourTrip === "New York City") {
		console.log("We want to go to a " + game + "!");
		} else {
		console.log("Not really interested in going to a " + game + ".");
	}	
};

//Boolean

var goToGame = function(ticketCost, numberTickets){
	if (ticketCost * 2 <= 300 && numberTickets >= 1) {
			seeGame = true;
		} else{
			seeGame = false;
		};
		return seeGame;	
};




whatToDo(ourTrip);
goToGame(ticketCost, numberTickets);
console.log("It is " + seeGame + " we were able to get " + numberTickets + " tickets from a scalper.");