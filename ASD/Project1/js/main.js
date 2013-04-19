
/*
George Dacosta
ASD 1304
Project 1
main.js
April 18, 2013
*/

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});			
	
$('#dispAllBtn').on("click", function(){
	getData();
});



$('#delAll').on("click", function(){
	deleteData();
});


$('dispAll').on("pageinit", function(){

});
$('#addAppt').on('pageinit', function(){
	var id = id;
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
				saveData(data, $('#submit').attr('data-key'));
			}					
			
		});
	
	
var saveData = function(data, key){
	if(!key) {
		var id = Math.floor(Math.random()*2037929902);
		
		} else {
		var	id = key;
			
	}
	var item = {};
		item.apptName	= ["Appointment Name: ", $('#apptName').val()];
		item.apptDate	= ["Appointment Date: ", $('#apptDate').val()];
		item.email		= ["Email: ", $('#email').val()];
		item.phone		= ["Phone: ", $('#phone').val()];
		item.apptType	= ["Appointment Type: ", $('#apptType').val()];
		item.itemName	= ["Item Name: ", $('#itemName').val()];
		item.amount		= ["Item Value: ", $('#amount').val()];
		item.comments	= ["Comments: ", $('#comments').val()];
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Appointment Saved!");
		location.reload();
	}; 
	
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


var autofillData = function (){
	console.log("autofill Fired");
	for (var n in json) {
		var id = Math.floor(Math.random()*2037929902);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}

	 
};

var makeItemLink = function(key, linksLi){
	console.log('Item Key = ' + key);
	var editLink = $('<a></a>').attr({
			"href": "#addAppt",
			"id": "editItemBtn",
			"data-role": "button",
			"data-mini": "true",
			"data-inline": "true",
			"data-key": key			
			})
			.html('Edit Appt')
			.appendTo(linksLi).on("click", function() {
				console.log('edit button clicked!');
				console.log('Clicked Key = ' + $(this).attr('data-key'));
				editItem($(this).attr('data-key'));
			});
			
	var deleteLink = $('<a></a>').attr({
			"href": "#",
			"id": "deleteItemBtn",
			"data-role": "button",
			"data-mini": "true",
			"data-inline": "true",
			"key": key			
			})
			.html('Delete appt')
			.appendTo(linksLi).on("click", deleteItem);
			
			
};

var getData = function(key){
	if(localStorage.length === 0){
		autofillData();

	};

		for (var i=0, len=localStorage.length; i<len; i++){
		var makeLi = $('<br><li></li><br>').attr({
										'id': 'listData',
										'data-role': 'listview',
										'data-theme': 'a'}).appendTo('#displayAll');
				
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);
				
				for (var n in obj){
					var makeSubli = $('<p></p>').html(obj[n][0] + "" + obj[n][1]).appendTo(makeLi);
					
				}			
				var linksLi = $('<div><br></div>').attr('class', 'linksLi').appendTo(makeLi);
				makeItemLink(localStorage.key(i), linksLi);			
		}
		console.log(key);
		alert("Appointments Retrived");
		
};


var editItem = function(key){
		//grab the data from the item from local storage
		var value = localStorage.getItem(key);
		var item = $.parseJSON(value);
		console.log('EditItemFunction Key = ' + key);
		
		//populate the form fields with current localStorage values.
		$('#apptName').val(item.apptName[1]);
		$('#apptDate').val(item.apptDate[1]);
		$('#email').val(item.email[1]);
		$('#phone').val(item.phone[1]);
		$('#apptType').val(item.apptType[1]);
		$('#itemName').val(item.itemName[1]);
		$('#amount').val(item.amount[1]);
		$('#comments').val(item.comments[1]);
		
		$('#submit').val("Edit");
		$('#submit').attr('data-key', key);
		console.log('SubmitButton Key = ' + $('#submit').attr('data-key'));
};		

var	deleteItem = function (){
	var ask = confirm("Are you sure you want to delete this appointment?");
		if (ask === true){
			localStorage.removeItem($(this).attr('key'));
			alert("Appointment Deleted");
			window.location.reload();
		}else{
			alert("Appointment was not deleted!");
		}

			
};
					
var deleteData = function(){
		var askAll = confirm("WARNING! This will delete ALL appointments! Press OK to continue.");	
		if(localStorage.length === 0){
			alert("There are no appointments!");

		}else if(askAll){
			localStorage.clear();
			alert("All appointments deleted!");
			}else{
			
				alert("Appointments were not deleted!");
			return false;
			


		}

};


