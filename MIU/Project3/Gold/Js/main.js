/*
George Dacosta
MIU 1302
Project 3 Gold
main.js
February 21, 2013
*/

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});			
	

$('#addAppt').on('pageinit', function(){
	
		var myForm = $('#addApptForm'),
			errorsLink =$('#errorsLink');
		    myForm.validate({
			invalidHandler: function(form, validator) {
				errorsLink.click();
				
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]').not('[generated]');														console.log(label.text);
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldName + '</li>';
				};
				$("#formErrors ul").html(html);
			},
			submitHandler: function() {
				var data = myForm.serializeArray();
				saveData(data);			
			}					
			
		});
	
	
	//any other code needed for addItem page goes here
	
});

$('#aType').on('pageinit', function(){
		
});

$('#aName').on('pageinit', function(){
		
});

$('#aDate').on('pageinit', function(){
		
});

$('#aEmail').on('pageinit', function(){
		
});

$('#aItemName').on('pageinit', function(){
		
});

$('#info').on('pageinit', function(){
		
});

$('#developer').on('pageinit', function(){
		
});

$('#credits').on('pageinit', function(){
		
});

$('#reset').on('click', function(){
	window.location.reload();
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var saveData = function(data, key){
	if(!key){
		var id= Math.floor(Math.random()*2037929902);
		
		}else{
			id = key;
			
	}
	var product = {};
		product.apptName	= ["Appointment Name: ", $('#apptName').val()];
		product.apptDate	= ["Appointment Date: ", $('#apptDate').val()];
		product.email		= ["Email: ", $('#email').val()];
		product.apptType	= ["Appointment Type: ", $('#apptType').val()];
		product.itemName	= ["Item Name: ", $('#itemName').val()];
		product.iQual		= ["Quality Level: ", $('#iQual').val()];
		product.itemChange	= ["Did Item Change Hands? ", $('input:radio[name=itemChange]:checked').val()];
		product.amount		= ["Item Value: ", $('#amount').val()];
		product.comments	= ["Comments: ", $('#comments').val()];
		
		localStorage.setItem(id, JSON.stringify(product));
		alert("Appointment Saved!");
		
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


