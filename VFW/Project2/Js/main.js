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
	
	function saveData(){
		var numbId 			= Math.floor(Math.random()*1000001);
		//Gather all form field values and store in an object.
		//Object properties contain array with the form label and input value.
		var product			={};
		
			product.apptName	=["Appointment Name", $('apptName').value];
			product.apptDate	=["Appointment Date", $('apptDate').value];
			product.email   	=["Email", $('email').value];
			product.phone	    =["Phone Number", $('phone').value];
			product.apType    =["Appointment Type", $('apType').value];
/*
			product.itemName    =["Item Name"], $('itemName').value];
			product.itemChange  =["Did Item Change Hands", itemChangeValue];
*/
			product.amount      =["Item Value", $('amount').value];
			product.notes       =["Notes:", $('notes').value];
		// Save data into Local Storage: Use Stringify to convert object to a string.
		localStorage.setItem(numbId, JSON.stringify(product));
		alert("Info Stored!");
					
		
	};
	
	
	
	
	//Variable defaults
	var apptType = ["--Choose Appointment--", "Sales", "Trade", "Appraisal", "Purchase", "Delivery"];
	makeAppt();
	
	
	
/*
	//Set Link & Submit Click Events
	var displayDataLink = $('displayDataLink');
	displayDataLink.addEventListener("click", pullData);
	var clearDataLink = $('clearDataLink');
	clearDataLink.addEventListener("click", eraseLS);
*/
	var storeButton = $('storeButton');
	storeButton.addEventListener("click", saveData);
	
});