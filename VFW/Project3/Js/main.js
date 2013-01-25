/*
George Dacosta
VFW 1301
Project 3
main.js
January 24, 2013
*/


//wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){


	//getElementById Function.
	function ge(x){
		var myElems = document.getElementById(x);
		return myElems;
	};
	
	//Variable defaults
	var apptType = ["--Choose Appointment--", "Sales", "Trade", "Appraisal", "Purchase", "Delivery"],
	    itemChangeValue = "No",
	    errorMessage = ge('errors');
	    
	//Create select field element and populate with options.
	
	function makeAppt(){
		var tarTag = document.getElementsByTagName("form"),   //tarTag is an array of all the form tags.
			selectListItem = ge('dDown'),
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

	function toggleControls(n){
		switch(n){
	   	    case "on":
	   	         ge('apptForm').style.display = "none";
	   	         ge('clearDataLink').style.display = "inline";
	   	         ge('displayDataLink').style.display = "none";
	   	         ge('newForm').style.display = "inline";
	   	    	break;
	   	    case "off":
	   	         ge('apptForm').style.display = "block";
	   	         ge('clearDataLink').style.display = "inline";
	   	         ge('displayDataLink').style.display = "inline";
	   	         ge('newForm').style.display = "none";
	   	         ge('items').style.display = "none";	   	    
	   	    	break;
	   	    default:	
		    	return false;
		 }	    	
	};	
		
	





	
	function saveData(key){
		// If this is a new item and we need a new key.
		if(!key){
			
			var numbId 			= Math.floor(Math.random()*1000001);
			}else{
			//set the id tho the exisiting key that we are editing so that it will save over the data.
			//the key is the same key that's been passed along from the isValid event handler
			//to the validate function then passed here through the saveData 
				numbId =key;
			}
		console.log("saveData ran");
		//Gather all form field values and store in an object.
		//Object properties contain array with the form label and input value.
		getSelectedRadio();
		var product			={};
		
			product.apptName	=["Appointment Name", ge('apptName').value];
			product.apptDate	=["Appointment Date", ge('apptDate').value];
			product.email   	=["Email", ge('email').value];
			product.phone	    =["Phone Number", ge('phone').value];
			product.apptType    =["Appointment Type", ge('appts').value];
  			product.itemName    =["Item Name", ge('itemName').value];  
			product.itemChange  =["Did Item Change Hands", itemChangeValue];
			product.amount      =["Item Value", ge('amount').value];
			product.comments       =["comments:", ge('comments').value];
		// Save data into Local Storage: Use Stringify to convert object to a string.
		localStorage.setItem(numbId, JSON.stringify(product));
		alert("Info Stored!");
					
		
	};
	
	function pullData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There are no appointments to display");
		}
		//Write Data from Local Storage to the Browser.
		var createDiv = document.createElement('div');
		createDiv.setAttribute("id", "items");
		var createList = document.createElement('ul');
		createDiv.appendChild(createList);
		document.body.appendChild(createDiv);
		ge('items').style.display = "block"; 
		for(var i=0, len=localStorage.length; i<len; i++){
			var createLi = document.createElement('li');
			var linkItem = document.createElement('li');
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
			    createSubli.appendChild(linkItem);
				
			}
			createItemLinks(localStorage.key(i),linkItem); //Create the edit and delete buttons/Link for each item in Local Storage.
			
		}
		
		
	}
	// Create Item Links
	// Create the edit and delete links for each stored item when displayed.
	
	function createItemLinks(key,linkItem){
		// add edit single item link
		var linkToEdit = document.createElement('a');
	    linkToEdit.href = "#";
		linkToEdit.key = key;
		var eText = "Edit Appointment";
 		linkToEdit.addEventListener("click", editAppt); 
		linkToEdit.innerHTML = eText;
		linkItem.appendChild(linkToEdit);
		
		
		// add line break
		var tagBr = document.createElement('br');
		linkItem.appendChild(tagBr);
		
		var deleteItemL = document.createElement('a');
		deleteItemL.href = "#";
		deleteItemL.key = key;
		var delText = "Delete Appointment";
 		deleteItemL.addEventListener("click", deleteAppt); 
		deleteItemL.innerHTML = delText;
		linkItem.appendChild(deleteItemL);
		
	}
	
	
	function editAppt(){
		//Grab data from our item from Local Storage.
		var value = localStorage.getItem(this.key);
		var product = JSON.parse(value);
		
		//shows form
		toggleControls("off");
	
		//populate form fields with current values
		
		ge('apptName').value = product.apptName[1];
		ge('apptDate').value = product.apptDate[1];
		ge('email').value = product.email[1];
		ge('phone').value = product.phone[1];		
		ge('appts').value = product.apptType[1];
		ge('itemName').value = product.itemName[1];
		var realR = document.forms[0].itemChange;
		for(var i=0; i<realR.length; i++){
			if(realR[i].value == "yes" && product.itemChange[1] == "yes"){
				realR[i].setAttribute("checked", "checked");
			}else if(realR[i].value == "no" && product.itemChange[1] == "no"){
				realR[i].setAttribute("checked", "checked");
				
			
			}
		}
		ge('amount').value = product.amount[1];
		ge('comments').value = product.comments[1];
		
		//remove the initial listener from the input "Save Appointment" button
		storeButton.removeEventListener("click", saveData);
		//change Submit button value to edit button
		ge('storeButton').value = "Edit Appointment";
		var editButton = ge('storeButton');
		// save the key value of this function as a property of the edit button event
		//so it can be used when we save the data we editied.
		editButton.addEventListener("click", isValid);
		editButton.key = this.key;
		
	}
	
	function deleteAppt(){
			var question = confirm("Do you want to delete this Appointment?");
			if(question){
				localStorage.removeItem(this.key);
				window.location.reload();
			}else{
				alert("Appointment was not deleted!");
				
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
	
	function isValid(p){
		//Define the elements we want to check
		var getAppts = ge('appts');
		var getApptName = ge('apptName');
		var getApptDate = ge('apptDate');
		var getEmail = ge('email');
		
		//reset error msgs
		errorMessage.innerHTML = "";
		getAppts.style.border = "1px solid black";
		getApptName.style.border = "1px solid black";
		getApptDate.style.border = "1px solid black";
	    getEmail.style.border = "1px solid black";
		     
		// get error msgs
		var notesAry = [];
		//group validation
		if(getAppts.value === "--Choose Appointment--"){
		    var appointmentError = "Please choose an Appointment.";
		    getAppts.style.border = "1px solid red";
		    notesAry.push(appointmentError);
		    
		}
		
		//Appoint Name validate
		if(getApptName.value === ""){
			 var apptNameError = "Please enter a name.";
		     getApptName.style.border = "1px solid red";
		     notesAry.push(apptNameError);
		     }
		     
		//Appointment date validate
		if(getApptDate.value === ""){
			 var apptDateError = "Please enter a date.";
		     getApptDate.style.border = "1px solid red";
		     notesAry.push(apptDateError);
		     }
		     
		//email valiate
		var regEx = /^\w+([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!(regEx.exec(getEmail.value))){
			var emailError = "Please Enter An Email Address.";
			getEmail.style.border = "1px solid red";
			notesAry.push(emailError);
		}    
				
		//if there were any errors, display them on the screen
		if(notesAry.length >= 1){
		     for(var i=0, j=notesAry.length; i < j; i++){
			     var text = document.createElement('li');
			     text.innerHTML = notesAry[i];
			     errorMessage.appendChild(text);
			     
		     }
		     p.preventDefault();
		     return false;
		     
		}else{
		    // if all is ok, then save data. send the key value(came from the editAppt function).
		    // this key value was passed through the isValid event listener as a property.
			saveData(this.key);
			
		}
		 
	}
	
	makeAppt();
	
	//Set Link & Submit Click Events
	var displayDataLink = ge('displayDataLink');
	displayDataLink.addEventListener("click", pullData);
 	var clearDataLink = ge('clearDataLink'); 
	clearDataLink.addEventListener("click", eraseLs); 


	var storeButton = ge('storeButton');
	storeButton.addEventListener("click", isValid);
		console.log("storeData fired");
	

	
	
	
	});

