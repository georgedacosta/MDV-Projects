
/*
George Dacosta
ASD 1304
Project 2
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

$('#xhrPage').on('pageinit', function(){
	
});

$('#xmlPage').on('pageinit', function(){
});

$('#xmlDataBtn').on('click', function(){

	$.ajax({
		url:		'xhr/data.xml',
		type:		'GET',
		dataType:	'xml',
		success:	function(response){
		alert("XML request received.");
		console.log(response);
		$(response).find("item").each(function(){ 

						var apptName = $(this).find('apptName').text(),
							apptDate = $(this).find('apptDate').text(),
							email = $(this).find('email').text(),
							phone = $(this).find('phone').text(),
							apptType = $(this).find('apptType').text(),
							itemName = $(this).find('itemName').text(),
							amount = $(this).find('amount').text(),
							comments = $(this).find('comments').text();
						$('<div data-role="content">'+ '<ul data-role="listview">' + 
							'<li>' +
							'<h3>' + 'Appointment Name: ' + apptName + '</h3>' +
							'<p>' + 'Appointment Date: ' + apptDate + '</p>' +
							'<p>' + 'Email: ' + email + '</p>' +
							'<p>' + 'Phone: ' + phone + '</p>' +
							'<p>' + 'Appointment Type: ' + apptType + '</p>' +
							'<p>' + 'Item Name: ' + itemName + '</p>' +
							'<p>' + 'Item Value: ' + amount + '</p>' +
							'<p>' + 'Comments: ' + comments + '</p>' + 
							'</li>' + '</ul>' + '</div>').appendTo('#xmlData');
			});
			
	}
});
		alert("XML Data Loaded");
});

$('#jsonPage').on("pageinit", function(){
	
});

$('#jsonDataBtn').on("click", function(){
	
		$.ajax({
		url:		'xhr/data.json',
		type:		'GET',
		dataType:	'json',
		success:	function(response){
		alert("JSON Request Received.");
			for (var i in response.items){
				var items = response.items[i];
					
					$('<div data-role="content">'+ '<ul data-role="listview">' + 
						'<li>' +
						'<h3>' + "Appointment Name: " + items.apptName + '</h3>' +
						'<p>' + "Appointment Date: " + items.apptDate + '</p>' +
						'<p>' + "Email: " + items.email + '</p>' +
						'<p>' + "Phone: " + items.phone + '</p>' +
						'<p>' + "Appointment Type: " + items.apptType + '</p>' +
						'<p>' + "Date: " + items.date + '</p>' +
						'<p>' + "Item Value: " + items.amount + '</p>' +
						'<p>' + "comments: " + items.comments + '</p>' + 
						'</li>' + '</ul>' + '</div>').appendTo('#jsonData');
			};
			console.log(response);
		}
	
	});
			alert("JSON Data Loaded");

});

$('#csvPage').on("pageinit", function(){
	
});

$('#csvDataBtn').on("click", function(){
	
		$.ajax({
		url:		'xhr/data.csv',
		type:		'GET',
		dataType:	'text',
		success:	function(response){
		alert("CSV Request Received.");
			var csvData = response.split(/\r\n|\n/),
				dataSep = csvData[0].split('|'),
				type = [];
			for(var i=1; i<csvData.length; i++){
				var data = csvData[i].split('|');
				if (data.length == dataSep.length){
					var items = [];
					for (var j=0; j<dataSep.length; j++){
						items.push(data[j]);
					}
					type.push(items);
				}
			}
			for(var k=0; k<type.length; k++){
				var item = type[k];	
								
					$('<div data-role="content">'+ '<ul data-role="listview">' + 
						'<li>' +
						'<h3>' + "Appointment Name: " + item[0]+ '</h3>' +
						'<p>' + "Appointment Date: " + item[1] + '</p>' +
						'<p>' + "Email: " + item[2] + '</p>' +
						'<p>' + "Phone: " + item[3] + '</p>' +
						'<p>' + "Appointment Type: " + item[4] + '</p>' +
						'<p>' + "Item Name: " + item[5]+ '</p>' +
						'<p>' + "Item Value: " + item[6] + '</p>' +
						'<p>' + "Comments: " + item[7] + '</p>' + 
						'</li>' + '</ul>' + '</div>').appendTo('#csvData');
			};
			console.log(response);
		}
	
	});
			alert("CSV Data Loaded");
			

});


$('#couchPage').on("pageinit", function(){
	
});

$('#couchBtn').on("click", function(){
		$.ajax({
		url:		'_view/items',
		dataType:	'json',
		success:	function(response){
/* 		alert("Couch Request Received."); */
			console.log(response);
			$('#couchData').empty();
			$.each(response.rows, function (index, item){
				var apptName = item.value.apptName;
				var apptDate = item.value.apptDate;
				var email = item.value.email;
				var phone = item.value.phone;
				var apptType = item.value.apptType;
				var itemName = item.value.itemName;
				var amount = item.value.amount;
				var comments = item.value.comments;
				$('<div data-role="collapsible" data-collapsed="true" data-theme="a">'+ 
						'<h3>' + apptName[1] + '</h3>' + 
						'<p>' + apptDate[0] + " " + apptDate[1] + '</p>' +
						'<p>' + email[0] + " " + email[1] + '</p>' +
						'<p>' + phone[0] + " " + phone[1] + '</p>' +
						'<p>' + apptType[0] + " " + apptType[1] + '</p>' +
						'<p>' + itemName[0] + " " + itemName[1] + '</p>' +
						'<p>' + amount[0] + " " + amount[1] + '</p>' +
						'<p>' + comments[0] + " " + comments[1] + '</p>' +
						'</div>').appendTo('#couchData');			
									
			});						
			
			
			$('#couchData').collapsibleset('refresh');

		}	
	});
			alert("Appointments Retrieved");
			$.mobile.changePage('#couchPage');

});

$('#salesPage').on("pageinit", function(){
	
});

$('#salesBtn').on("click", function(){
		$.ajax({
		url:		'_view/sales',
		dataType:	'json',
		success:	function(response){
/* 		alert("Sales Request Received."); */
			console.log(response);
			$('#salesData').empty();
			$.each(response.rows, function (index, item){
				var apptName = item.value.apptName;
				var apptDate = item.value.apptDate;
				var email = item.value.email;
				var phone = item.value.phone;
				var apptType = item.value.apptType;
				var itemName = item.value.itemName;
				var amount = item.value.amount;
				var comments = item.value.comments;
				$('<div data-role="collapsible" data-collapsed="true" data-theme="a">'+ 
						'<h3>' + apptName[1] + '</h3>' + 
						'<p>' + apptDate[0] + " " + apptDate[1] + '</p>' +
						'<p>' + email[0] + " " + email[1] + '</p>' +
						'<p>' + phone[0] + " " + phone[1] + '</p>' +
						'<p>' + apptType[0] + " " + apptType[1] + '</p>' +
						'<p>' + itemName[0] + " " + itemName[1] + '</p>' +
						'<p>' + amount[0] + " " + amount[1] + '</p>' +
						'<p>' + comments[0] + " " + comments[1] + '</p>' +
						'</div>').appendTo('#salesData');			
									
			});						
			
			
			$('#salesData').collapsibleset('refresh');

		}	
	});
			alert("Appointments Retrieved");
			$.mobile.changePage('#salesPage');


});

$('#purchasePage').on("pageinit", function(){
	
});

$('#purchaseBtn').on("click", function(){
		$.ajax({
		url:		'_view/purchase',
		dataType:	'json',
		success:	function(response){
/* 		alert("Request Received."); */
			console.log(response);
			$('#purchaseData').empty();
			$.each(response.rows, function (index, item){
				var apptName = item.value.apptName;
				var apptDate = item.value.apptDate;
				var email = item.value.email;
				var phone = item.value.phone;
				var apptType = item.value.apptType;
				var itemName = item.value.itemName;
				var amount = item.value.amount;
				var comments = item.value.comments;
				$('<div data-role="collapsible" data-collapsed="true" data-theme="a">'+ 
						'<h3>' + apptName[1] + '</h3>' + 
						'<p>' + apptDate[0] + " " + apptDate[1] + '</p>' +
						'<p>' + email[0] + " " + email[1] + '</p>' +
						'<p>' + phone[0] + " " + phone[1] + '</p>' +
						'<p>' + apptType[0] + " " + apptType[1] + '</p>' +
						'<p>' + itemName[0] + " " + itemName[1] + '</p>' +
						'<p>' + amount[0] + " " + amount[1] + '</p>' +
						'<p>' + comments[0] + " " + comments[1] + '</p>' +
						'</div>').appendTo('#purchaseData');			
									
			});						
			
			
			$('#purchaseData').collapsibleset('refresh');

		}	
	});
			alert("Appointments Retrieved");
			$.mobile.changePage('#purchasePage');

});


$('#appraisalPage').on("pageinit", function(){
	
});

$('#appraisalBtn').on("click", function(){
		$.ajax({
		url:		'_view/appraisal',
		dataType:	'json',
		success:	function(response){
/* 		alert("Request Received."); */
			console.log(response);
			$('#appraisalData').empty();
			$.each(response.rows, function (index, item){
				var apptName = item.value.apptName;
				var apptDate = item.value.apptDate;
				var email = item.value.email;
				var phone = item.value.phone;
				var apptType = item.value.apptType;
				var itemName = item.value.itemName;
				var amount = item.value.amount;
				var comments = item.value.comments;
				$('<div data-role="collapsible" data-collapsed="true" data-theme="a">'+ 
						'<h3>' + apptName[1] + '</h3>' + 
						'<p>' + apptDate[0] + " " + apptDate[1] + '</p>' +
						'<p>' + email[0] + " " + email[1] + '</p>' +
						'<p>' + phone[0] + " " + phone[1] + '</p>' +
						'<p>' + apptType[0] + " " + apptType[1] + '</p>' +
						'<p>' + itemName[0] + " " + itemName[1] + '</p>' +
						'<p>' + amount[0] + " " + amount[1] + '</p>' +
						'<p>' + comments[0] + " " + comments[1] + '</p>' +
						'</div>').appendTo('#appraisalData');			
									
			});						
			
			
			$('#appraisalData').collapsibleset('refresh');

		}	
	});
			alert("Appointments Retrieved");
			$.mobile.changePage('#appraisalPage');

});

$('#tradePage').on("pageinit", function(){
	
});

$('#tradeBtn').on("click", function(){
		$.ajax({
		url:		'_view/trade',
		dataType:	'json',
		success:	function(response){
/* 		alert("Request Received."); */
			console.log(response);
			$('#tradeData').empty();
			$.each(response.rows, function (index, item){
				var apptName = item.value.apptName;
				var apptDate = item.value.apptDate;
				var email = item.value.email;
				var phone = item.value.phone;
				var apptType = item.value.apptType;
				var itemName = item.value.itemName;
				var amount = item.value.amount;
				var comments = item.value.comments;
				$('<div data-role="collapsible" data-collapsed="true" data-theme="a">'+ 
						'<h3>' + apptName[1] + '</h3>' + 
						'<p>' + apptDate[0] + " " + apptDate[1] + '</p>' +
						'<p>' + email[0] + " " + email[1] + '</p>' +
						'<p>' + phone[0] + " " + phone[1] + '</p>' +
						'<p>' + apptType[0] + " " + apptType[1] + '</p>' +
						'<p>' + itemName[0] + " " + itemName[1] + '</p>' +
						'<p>' + amount[0] + " " + amount[1] + '</p>' +
						'<p>' + comments[0] + " " + comments[1] + '</p>' +
						'</div>').appendTo('#tradeData');			
									
			});						
			
			
			$('#tradeData').collapsibleset('refresh');

		}	
	});
			alert("Appointments Retrieved");
			$.mobile.changePage('#tradePage');


});

$('#deliveryPage').on("pageinit", function(){
	
});

$('#deliveryBtn').on("click", function(){
		$.ajax({
		url:		'_view/delivery',
		dataType:	'json',
		success:	function(response){
/* 		alert("Request Received."); */
			console.log(response);
			$('#deliveryData').empty();
			$.each(response.rows, function (index, item){
				var apptName = item.value.apptName;
				var apptDate = item.value.apptDate;
				var email = item.value.email;
				var phone = item.value.phone;
				var apptType = item.value.apptType;
				var itemName = item.value.itemName;
				var amount = item.value.amount;
				var comments = item.value.comments;
				$('<div data-role="collapsible" data-collapsed="true" data-theme="a">'+ 
						'<h3>' + apptName[1] + '</h3>' + 
						'<p>' + apptDate[0] + " " + apptDate[1] + '</p>' +
						'<p>' + email[0] + " " + email[1] + '</p>' +
						'<p>' + phone[0] + " " + phone[1] + '</p>' +
						'<p>' + apptType[0] + " " + apptType[1] + '</p>' +
						'<p>' + itemName[0] + " " + itemName[1] + '</p>' +
						'<p>' + amount[0] + " " + amount[1] + '</p>' +
						'<p>' + comments[0] + " " + comments[1] + '</p>' +
						'</div>').appendTo('#deliveryData');			
									
			});						
			
			
			$('#deliveryData').collapsibleset('refresh');

		}	
	});
			alert("Appointments Retrieved");
			$.mobile.changePage('#deliveryPage');

});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

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


