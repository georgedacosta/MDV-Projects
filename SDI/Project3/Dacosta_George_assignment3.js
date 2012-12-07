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
var wave = 8;
var game = "Yankees game";
var endInning = ["0-0", "0-2", "1-2", "2-2", "3-2", "3-4", "3-6", "4-7", "4-9, Yankees WIN"];
var innings = ["1st inning", "2nd inning", "3rd inning", "4th inning", "5th inning", "6th inning", "7th inning", "8th inning", "9th inning"];
var food = ["hot dogs", "popcorn", "Cracker Jacks"];
var drink = ["Coke", "beer", "hot chocolate"];

var json = {
	"players": [
		{
			"name": 	"Alex Rodriguez",
			"number": 	13,
			"position":	"third base",
			"nickName":	"AROD",
			"playing":	true
		},
				{
			"name": 	"Derek Jeter",
			"number": 	2,
			"position":	"short stop",
			"nickName":	"JETER",
			"playing":	true
		},

				{
			"name": 	"Mark Teixeira",
			"number": 	25,
			"position":	"first base",
			"nickName":	"TEX",
			"playing":	true
		},

				{
			"name": 	"Robinson Cano",
			"number": 	24,
			"position":	"second base",
			"nickName":	"CANO",
			"playing":	true
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

var goToGame = function(ticketCost, numberTickets, ourTrip){
	if (ticketCost * 2 <= 300 && numberTickets >= 1) {
		var	seeGame = true;
				console.log("It is " + seeGame + ", we bought " + numberTickets + " tickets from a scalper (after all we are in " + ourTrip + ")!");
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

var doWave = function (wave){
	while (wave >= 1){
		console.log("Get ready, here comes the wave again! The countdown shows it will come around " + wave + " more times!");
		wave--;
	};
	return wave;	
};

var keepScore = function(innings, endInning){
	for (var i = 0, j = endInning.length; i < j; i++){
		console.log("At the end of the " + innings[i] + ", the score is " + endInning[i] + "!");
	}	
	return endInning;
};

	

console.log("On the last day of our journey through " + ourTrip + " there is one more thing we must do!");
whatToDo(ourTrip);
goToGame(ticketCost, numberTickets, ourTrip);
console.log("As we take our seats at the " + game + ", the announcers voice starts to boom:");
playerIntro(json);
stuffFace(food, drink);
doWave(wave);
keepScore(innings, endInning);
console.log("What a wonderful day we had at the " + game + "!");

