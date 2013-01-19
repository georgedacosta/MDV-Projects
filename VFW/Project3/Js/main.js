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
	};
	
	//Variable defaults
	var apptType = ["--Choose Appointment--", "Sales", "Trade", "Appraisal", "Purchase", "Delivery"],
	    itemChangeValue;
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
		};
		selectListItem.appendChild(makeDD);
		
	};

	// Find value of selected radio button.
	function getSelectedRadio(){
		var realR = document.forms[0].itemChange;
		for(var i=0; i<realR.length; i++){
			if(realR[i].checked){			
				itemChangeValue = realR[i].value;
			}
		}
	};

	function togglecontrols(n){
		switch(n){
	   	    case "on":
	   	         $('apptForm').style.display = "none";
	   	         $('clearDataLink').style.display = "inline";
	   	         $('displayDataLink').style.display = "none";
	   	         $('newForm').style.display = "inline";
	   	    	break;
	   	    case "off":
	   	         $('apptForm').style.display = "block";
	   	         $('clearDataLink').style.display = "inline";
	   	         $('displayDataLink').style.display = "inline";
	   	         $('newForm').style.display = "none";
	   	         $('items').style.display = "none";	   	    
	   	    	break;
	   	    default:	
		    	return false;
	}	    	
	};	
		
	





	
	function saveData(){
		var numbId 			= Math.floor(Math.random()*1000001);
		console.log("saveData ran");
		//Gather all form field values and store in an object.
		//Object properties contain array with the form label and input value.
		getSelectedRadio();
		var product			={};
		
			product.apptName	=["Appointment Name", $('apptName').value];
			product.apptDate	=["Appointment Date", $('apptDate').value];
			product.email   	=["Email", $('email').value];
			product.phone	    =["Phone Number", $('phone').value];
			product.apptType    =["Appointment Type", $('appts').value];
  			product.itemName    =["Item Name", $('itemName').value];  
			product.itemChange  =["Did Item Change Hands", itemChangeValue];
			product.amount      =["Item Value", $('amount').value];
			product.notes       =["Notes:", $('notes').value];
		// Save data into Local Storage: Use Stringify to convert object to a string.
		localStorage.setItem(numbId, JSON.stringify(product));
		alert("Info Stored!");
					
		
	};
	
	function pullData(){
		togglecontrols("on");
		if(localStorage.length === 0){
			alert("There are no appointments to display");
		}
		//Write Data from Local Storage to the Browser.
		var createDiv = document.createElement('div');
		createDiv.setAttribute("idNumb",'items');
		var createList = document.createElement('ul');
		createDiv.appendChild(createList);
		document.body.appendChild(createDiv);
		for(var i=0, len=localStorage.length; i<len;i++){
			var createLi = document.createElement('li');
			createList.appendChild(createLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from Local Storage value back to an object using JSON.parse()
			var myObject = JSON.parse(value);
			var createSubList = document.createElement("ul");
			createLi.appendChild(createSubList);
			for(var n in myObject){
			    var createSubli = document.createElement('li');
			    createSubList.appendChild(createSubli);
			    var subText = myObject[n][0]+" "+myObject[n][1];
			    createSubli.innerHTML = subText;	
				
			}
			
			
		}
		
		
	}
	
	function eraseLs(){
		if(localStorage.length === 0){
			alert("There are no appointments to clear!");
			
		}else{
			localStorage.clear();
			alert("All appointments have been deleted");
			window.location.reload();
			return false;
		}
	}
	
	makeAppt();
	
	//Set Link & Submit Click Events
	var displayDataLink = $('displayDataLink');
	displayDataLink.addEventListener("click", pullData);
 	var clearDataLink = $('clearDataLink'); 
	clearDataLink.addEventListener("click", eraseLs); 


	var storeButton = $('storeButton');
	storeButton.addEventListener("click", saveData);
		console.log("storeData fired");
	

	
	
	
	});
