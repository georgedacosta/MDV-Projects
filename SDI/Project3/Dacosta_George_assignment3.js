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
var endInning = ["0-0", "0-2", "1-2", "2-2", "3-2", "3-4", "3-6", "4-7", "Yankees Win!"];
var innings = ["1st inning", "2nd inning", "3rd inning", "4th inning", "5th inning", "6th inning", "7th inning", "8th inning", "9th inning"];
var food = ["hot dogs", "popcorn", "Cracker Jacks"];
var drink = ["Coke", "beer", "hot chocolate"];

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
		var	seeGame = true;
				console.log("It is " + seeGame + ", we bought " + numberTickets + " tickets from a scalper.");
		} else {
		var	seeGame = false;
				console.log("Our thinking it would be easy to get " + numberTickets + " tickets for the " + game + " was unfortunately, " + seeGame + ".");
		};
		return seeGame + numberTickets;	
};

//Accessor

var playerIntro = function(json){
	for (var i = 0; i < json.players.length; i++){
		var	player = json.players[i];
		console.log("Playing " + player.position + ", number " + player.number + " is " + player.name + ". The crowd chants " + player.nickName + ", " + player.nickName + ", " + player.nickName + "!");
	}	
	return player;
};

//Mutator

var stuffFace = function(food, drink){
	
	for (var i = 0, j = drink.length; i < j; i++) {
		console.log("The game has started, so time for junk food! How about some " + food[i] + " and a " + drink[i] + "!"); 		
	};
		food.shift();
		food.shift();
		food.shift();
	return food;	
};



whatToDo(ourTrip);
goToGame(ticketCost, numberTickets);
console.log("As we take our seats at the " + game + ", the announcers voice starts to boom:");
playerIntro(json);
stuffFace(food, drink);

