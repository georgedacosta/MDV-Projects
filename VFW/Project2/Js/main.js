/*
George Dacosta
VFW 1301
Project 2
main.js
January 17, 2013
*/


//wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){


	//getElementById Function.
	function $(x){
		var myElems = document.getElementById(x);
		return myElems;
	}
	//Create select field element and populate with options.
	function makeAppt(){
		var tarTag = document.getElementsByTagName("form"),   //tarTag is an array of all the form tags.
			selectListItem = $('dDown'),
			makeDD = document.createElement('select');
			makeDD.setAttribute("id", "appts");
		for(var i = 0, j=apptType.length; i<j; i++){
			var createOpt = document.createElement('option');
			var optionText = apptType[i];
			createOpt.setAttribute("value", optionText);
			createOpt.innerHTML = optionText;
			makeDD.appendChild(createOpt);
		}
		selectListItem.appendChild(makeDD);
		
		
		
	};
	//Variable defaults
	var apptType = ["--Choose Appointment--", "Sales", "Trade", "Appraisal", "Purchase", "Delivery"];
	makeAppt();
	
	
	
	//Set Link & Submit Click Events
/*
	var displayDataLink = $('displayDataLink');
	displayDataLink.addEventListener("click", pullData);
	var clearDataLink = $('clearDataLink');
	clearDataLink.addEventListener("click", eraseLS);
	var storeButton = $('storeButton');
	store.addEventListener("click", saveData);
	
*/
});