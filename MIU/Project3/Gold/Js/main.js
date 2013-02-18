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

		var myForm = $('#addApptForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
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


//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


