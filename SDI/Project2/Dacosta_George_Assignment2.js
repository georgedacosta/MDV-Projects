/*
George Dacosta
SDI 1212
Project 2
November 29, 2012
*/

//Variables

var ourTrip = "New York City";
var ourDestinations = [
					"the Museum of Modern Art",
					"Ground Zero",
					"the Top of the Rock",
					"the Statue of Liberty",
					"the Empire State Building",
					"our hotel"
];
var budgetPerTickets = 200;
var costPerTicket = 75;
var milesWalked = "we have walked 50 miles";
var hoursToFood = 3;
var travelPoints = 5;



//Procedure

var whereToGo = function(whereToTravel){
	whereToTravel = ourTrip;
	if (whereToTravel === "New York City"){
		console.log("We have made it to " + ourTrip + " for vacation!");
		
		} else {
			
		console.log("Sadly, we canot go to " + ourTrip + " at this time.");
		};
		
};

//Boolean Function

var whatToDo = function(budgetPerTickets, costPerTicket){
	if (budgetPerTickets <= 300 && costPerTicket >= 50) {
		seeSights = true;
		console.log("It is time to get out of the hotel and see the city!");
		
	} else {
		seeSights = false;
		console.log("We are too tired, so will stay in the hotel today.");	
	};
	return seeSights;
	
};

//Number Function

var gettingHungry = function(hoursToFood){
	placeToEat = "Carnegie deli";
	while (hoursToFood >= 1) {
	console.log("We are starting to get hungry, but there's " + hoursToFood + " hours before we can get to the " + placeToEat + ".");
	hoursToFood--;	
	};
	return hoursToFood;
	
};

//String Function

var feetHurt = function(ourTrip, milesWalked){
	needShoes = "get new shoes";
	shoeStore = "Bruno Magli Shoes";
	console.log("Since we have been in " + ourTrip + " it seems like " + milesWalked + ", think I need to " + needShoes  + ". " + shoeStore + " is just the store I want!");
	return shoeStore; 
	
};

//Array Function
var touristTime = function(ourDestinations, travelPoints){
	ourTransport = ["hail a cab", "walk", "take the subway", "climb on the ferry", "take a tourist double decker bus", "jump on the metro"];
	console.log("So that we can maximize our time and see " + travelPoints + " attractions today, we will use different modes of transportation.");
	for (var i=0, j=ourDestinations.length; i < j; i++){
		console.log("To get to " + ourDestinations[i] + " we will " + ourTransport[i] + ".");
		};
		return ourDestinations;
};

whereToGo();
whatToDo(budgetPerTickets, costPerTicket);
gettingHungry(hoursToFood);
console.log("Woohoo! We have finally made it to the " + placeToEat + "!");
feetHurt(ourTrip, milesWalked);
touristTime(ourDestinations, travelPoints);
console.log("It has been a long and fun day! Saw lots of neat stuff & got new shoes at " + shoeStore + ". Can't wait to go to the ballgame tomorrow!"); 