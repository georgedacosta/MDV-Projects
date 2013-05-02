
/*
George Dacosta
ASD 1304
Project 4
main.js
May 2, 2013
*/

$('#home').on('pageinit',function(){	
});

$('#home').on('pageshow', function(){
	$('#couchBtn').on('click', function() {getData('items')		
	});
	
	$('#salesBtn').on('click', function() {getData('sales')
		
	});
	
	$('#purchaseBtn').on('click', function() {getData('purchase')
		
	});
	
	$('#appraisalBtn').on('click', function() {getData('appraisal')
		
	});
	
	$('#tradeBtn').on('click', function() {getData('trade')
		
	});
	
	$('#deliveryBtn').on('click', function() {getData('delivery')
		
	});
});			
	

$('#delAll').on("click", function(){
	deleteData();
});

$('#display').on('pageinit', function(){
	
});

$('#addAppt').on('pageinit', function(){
	$('#submit').on("click", function(){
		saveData();

	});	

	var id = id;
		var myForm = $('#addApptForm'),
			errorsLink =$('#errorsLink');
		    myForm.validate({
			invalidHandler: function(form, validator) {
				errorsLink.click();
				
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]').not('[generated]');																
					console.log(label.text);
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
	
	
});


$('#credits').on('pageinit', function(){
		
});

$('#reset').on('click', function(){
	window.location.reload();
});

var saveData = function(key, rev){
console.log("saveData fired key: " + key + "rev: " + rev );
	var doc = {};
	if(!key ){
		var id = 'item:' + $('#apptType').val() + ':' + Math.floor(Math.random()*2037929902);
		
		} else {
		var	id = key;
		doc._rev = rev;
			
	}
	$('#submit').attr('data-key', id);
	console.log(id);
		doc._id			= id;
		doc.apptName	= ["Appointment Name: ", $('#apptName').val()];
		doc.apptDate	= ["Appointment Date: ", $('#apptDate').val()];
		doc.email		= ["Email: ", $('#email').val()];
		doc.phone		= ["Phone: ", $('#phone').val()];
		doc.apptType	= ["Appointment Type: ", $('#apptType').val()];
		doc.itemName	= ["Item Name: ", $('#itemName').val()];
		doc.amount		= ["Item Value: ", $('#amount').val()];
		doc.comments	= ["Comments: ", $('#comments').val()];
		
			$.couch.db('asdproject').saveDoc(doc, {
				success: function(data){
				console.log(data);
					alert('Appointment Added');
					getData('items');
										
				}								
			});
					
				$('#submit').removeAttr('key');
				
	}; 
	
	
	//change version of jquery.
var getData = function(key){
	$('#displayData').empty();
	$.couch.db('asdproject').view('app/'+key,{
		success: function(data){
			console.log(data);
			$.each(data.rows, function (index, item){
				var apptName = item.value.apptName;
				var apptDate = item.value.apptDate;
				var email = item.value.email;
				var phone = item.value.phone;
				var apptType = item.value.apptType;
				var itemName = item.value.itemName;
				var amount = item.value.amount;
				var comments = item.value.comments;
					$('<div data-role="collapsible" data-collapsed="true" data-theme="a">' +
					 	'<h3>' + apptName[1] + '</h3>' +	   					 
						'<p>' + apptDate[0] + " " + apptDate[1] + '</p>' +
						'<p>' + email[0] + " " + email[1] + '</p>' +
						'<p>' + phone[0] + " " + phone[1] + '</p>' +
						'<p>' + apptType[0] + " " + apptType[1] + '</p>' +
						'<p>' + itemName[0] + " " + itemName[1] + '</p>' +
						'<p>' + amount[0] + " " + amount[1] + '</p>' +
						'<p>' + comments[0] + " " + comments[1] + '</p>' +
						'</div>').appendTo('#displayData')
							.append($('<a>')
								.attr({
									"href": "#",
									"id": "editBtn",
									"class": "btn",
									"data-role": "button",
									"data-mini": "true",
									"data-inline": "true",
									"data-theme":	"a",
									"data-key": item.id
										}).html('Edit').on("click", editItem)
									)
							.append($('<a>')
								.attr({
									"href": "#",
									"id": "deleteBtn",
									"class": "btn",
									"data-role": "button",
									"data-mini": "true",
									"data-inline": "true",
									"data-theme":	"a",
									"data-key": item.id
										}).html('Delete').on("click", deleteItem)
									);
			});
			$('.btn').button();
			$('#displayData').collapsibleset('refresh');						

		},
		 error: function(status) {
			 console.log(status);
		}
	});

	$.mobile.changePage('#display');
};		

var editItem = function(key, rev){
		//grab the data from the item from local storage
		$.couch.db('asdproject').openDoc($(this).attr('data-key'),{
			success: function(data){	
			console.log("this is the id: " + data._id);	
			console.log("this is the rev: " + data._rev);
		console.log('EditItemFunction Key = ' + key);
		
		//populate the form fields with current localStorage values.
		$('#apptName').val(data.apptName[1]);
		$('#apptDate').val(data.apptDate[1]);
		$('#email').val(data.email[1]);
		$('#phone').val(data.phone[1]);
		$('#apptType').val(data.apptType[1]);
		$('#itemName').val(data.itemName[1]);
		$('#amount').val(data.amount[1]);
		$('#comments').val(data.comments[1]);
		
		$('#submit').closest('.ui-btn').hide();
		$('#sub').empty();
		var editButton = $('<input type="button" id="edit" data-theme="a" value="Save Edited Appointment"><input>');
		$('#sub').append($(editButton));
		editButton.button();
		setTimeout(function(){
			$.mobile.changePage('#addAppt');
			}, 1000);
			$('#edit').click(function(){
				saveData(data._id, data._rev);
				console.log("id=: " + data._id + "rev= " + data._rev);
			});
				}
		});
	};	

var deleteItem = function(){
		var ask = confirm("Are you sure you want to delete this appointment?");
		if (ask === true){
			$.couch.db('asdproject').openDoc($(this).attr('data-key'),{
				success: function(data) {
					console.log(data);
					var doc = {};
					doc._id = data._id;
					doc._rev = data._rev;
					$.couch.db('asdproject').removeDoc(doc, {
						success: function(data){
							console.log(data);
							alert('Appointment Deleted');
						},
						error: function(status){
							console.log(status);
						}
					});
				}
			});
			$(this).parent().parent().remove();
		}
};	
					
var deleteData = function(){
		var askAll = confirm("This action will delete ALL appointments.");	
		if(askAll === true){
			$.couch.db('asdproject').view('asdproject/items', {
				success: function(data){
					var docs = [];
					$.each(data.rows, function(index, item){
						var doc = {};
						doc._id = item.value._id;
						doc._rev = item.value._rev;
						docs.push(doc);
					});
					console.log(docs);
					$.couch.db('asdproject').bulkRemove({"docs":docs},{
						success: function(data){
							console.log(data);
							alert('All Appointments Removed.');
						},
						error: function(status){
							console.log(status);
						}
					});
				}
			});
		}		
};


