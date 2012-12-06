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
		return seeGame;	
};

//Accessor

var playerIntro = function(json){
	for (var i = 0; i < json.players.length; i++){
		var	player = json.players[i];
		console.log("Playing " + player.position + ", number " + player.number + " is " + player.name + ". The crowd chants " + player.nickName + ", " + player.nickName + ", " + player.nickName + "!");
	}	
	return player;
};


var junkFood = function(){
	
	
	
	
};

whatToDo(ourTrip);
goToGame(ticketCost, numberTickets);
console.log("As we take our seats at the " + game + ", the announcers voice starts to boom:");
playerIntro(json);

