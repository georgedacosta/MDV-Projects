/*
George Dacosta
AVF 1306
main.js
june 14, 2013
*/

////////////////////////////////////***Research Section***/////////////////////////////

$('#wk1Button').on('click', function(){ //Retrieve week 1 research
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "js/research.json",
		success: function(data){
			console.log(data.week1);
			
			$('#researchPop').empty();
			var wk = data.week1.wk;
			var q1 = data.week1.q1;
			var q2 = data.week1.q2;
			var q3 = data.week1.q3;
			var q4 = data.week1.q4;
			var q5 = data.week1.q5;
			var r1 = data.week1.r1;
			var r2 = data.week1.r2;
			var r3 = data.week1.r3;
			var r4 = data.week1.r4;
			var r5 = data.week1.r5;
			
			console.log(wk);
                  $('#researchPop').append(
                    $('<div>')
                    .attr("class","rDiv")
                    .append($("<ul>"))
                    .append($("<li>" + "<h3>" + "Week " + wk[1] +  "</h3>" + "</li>")
                    .attr("class", "weekTitle"))
                    .append($("<li>" + "<h4>"+ q1[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r1[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q2[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r2[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q3[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r3[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q4[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r4[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q5[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r5[1] + "</p>" + "</li>")));

                    
		}
	
	
	});	
});

$('#wk2Button').on('click', function(){ //Retrieve week 2 research
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "js/research.json",
		success: function(data){
			console.log(data.week2);
			
			$('#researchPop').empty();
			var wk = data.week2.wk;
			var q1 = data.week2.q1;
			var q2 = data.week2.q2;
			var q3 = data.week2.q3;
			var q4 = data.week2.q4;
			var r1 = data.week2.r1;
			var r2 = data.week2.r2;
			var r3 = data.week2.r3;
			var r4 = data.week2.r4;
			
			console.log(r1);
                  $('#researchPop').append(
                    $('<div>')
                    .attr("class","rDiv")
                    .append($("<ul>"))
                    .append($("<li>" + "<h3>" + "Week " + wk[1] +  "</h3>" + "</li>")
                    .attr("class", "weekTitle"))
                    .append($("<li>" + "<h4>"+ q1[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r1[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q2[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r2[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q3[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r3[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q4[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r4[1] + "</p>" + "</li>")));

                    
		}
	
	
	});	
});

$('#wk3Button').on('click', function(){ //Retrieve week 3 research
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "js/research.json",
		success: function(data){
			console.log(data.week3);
			
			$('#researchPop').empty();
			var wk = data.week3.wk;
			var q1 = data.week3.q1;
			var q2 = data.week3.q2;
			var q3 = data.week3.q3;
			var q4 = data.week3.q4;
			var r1 = data.week3.r1;
			var r2 = data.week3.r2;
			var r3 = data.week3.r3;
			var r4 = data.week3.r4;
			
			console.log(wk);
                  $('#researchPop').append(
                    $('<div>')
                    .attr("class","rDiv")
                    .append($("<ul>"))
                    .append($("<li>" + "<h3>" + "Week " + wk[1] +  "</h3>" + "</li>")
                    .attr("class", "weekTitle"))
                    .append($("<li>" + "<h4>"+ q1[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r1[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q2[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r2[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q3[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r3[1] + "</p>" + "</li>"))
                    .append($("<li>" + "<h4>"+ q4[1] + "</h4>" + "</li>"))
                    .append($("<li>" + "<p>"+ r4[1] + "</p>" + "</li>")));

                    
		}
	
	
	});	
});

////////////////////////////////////***Weather Section***/////////////////////////////


$("#fcButton").on('click', function(){

var success = function(position){
var lat = position.coords.latitude;
var lon = position.coords.longitude;

$.ajax({
url : "http://api.wunderground.com/api/119995b3b695b665/geolookup/forecast/q/" + lat + "," + lon + ".json",
dataType: 'jsonp',
         success : function(parsed_json) {
         console.log(parsed_json);
            	$('#weatherPop').empty();
                $('#weatherPop').append(
                    $('<div>')
                    .attr("class","fcDiv")
                    .append($("<h3>"+"Forecast for: "+ parsed_json.location.city + ", " +parsed_json.location.state+"</h3>")));

            $.each(parsed_json.forecast.txt_forecast.forecastday, function(){
            console.log(parsed_json.forecast.txt_forecast.forecastday);
                
                $('#weatherPop').append(
                    $('<div>')
                    .attr("class","fcDiv")
                        .append($("<h4>" + this.title + "</h4>")
                        .attr("class", "fcTitle"))
                        .append($("<img src=" + this.icon_url + ">"))
                        .append($("<p>" + this.fcttext + "</p>")
                            .attr("class","fctext")));
            });

  }
});
}


var error = function(error){
alert(error.message)
}
navigator.geolocation.getCurrentPosition(success, error);
});

	
	
$("#ccButton").on('click', function(){

var success = function(position){
var lat = position.coords.latitude;
var lon = position.coords.longitude;

$.ajax({
url : "http://api.wunderground.com/api/119995b3b695b665/geolookup/conditions/q/" + lat + "," + lon + ".json",
dataType: 'jsonp',
         success : function(parsed_json) {
         console.log(parsed_json);
         $('#weatherPop').empty();
		  var cc_img = parsed_json.current_observation.icon_url;       
		  var location = parsed_json.location.city;
		  var loc_st = parsed_json.location.state;
		  var temp_st = parsed_json.current_observation.temperature_string;
		  var wind = parsed_json.current_observation.wind_string;
		  var humid = parsed_json.current_observation.relative_humidity;
		  var update = parsed_json.current_observation.observation_time;
		  var rain_st = parsed_json.current_observation.precip_today_string;
		  var bar_pr = parsed_json.current_observation.pressure_mb;
		  var pres_trend = parsed_json.current_observation.pressure_trend;
                  $('#weatherPop').append(
                    $('<div>')
                    .attr("class","currentDiv")
                    .append($("<h3>" + "Current Conditions in " + location + ", " + loc_st + "</h3>")
                    .attr("class", "ccHead"))
                    .append($("<img src=" + cc_img +">")
                    .attr("class", "ccImg"))
                    .append($("<p>"+"Temperature: " +  temp_st+ "</p>"))
                    .append($("<p>"+"Winds: " + wind + "</p>"))
                    .append($("<p>"+"Relative Humidity: " + humid + "</p>"))
                    .append($("<p>"+"Rainfall Amount: " + rain_st + "</p>"))
                    .append($("<p>"+"Barometric Pressure: " + bar_pr + "mb " + pres_trend + "</p>"))
                    .attr("class", "obTime")
                    .append("<p>" + update + "</p>")
                    .attr("class", "ccTime"));

  }
});
}


var error = function(error){
alert(error.message)
}
navigator.geolocation.getCurrentPosition(success, error);
});


$('#clearW').on('click', function(){
	window.location.reload();	
});

////////////////////////////////////***Instagram Section***/////////////////////////////



$("#igYsButton").on('click', function(){

	$.ajax({
	url : "https://api.instagram.com/v1/tags/yankee_stadium/media/recent?callback=&amp=&client_id=67de772e888b4278a8ca04df8b5f441b",
	dataType: 'jsonp',
	         success : function(result) {
	         console.log(result);
	            	$('#igPop').empty();
	                $('#igPop').append(
	                    $('<div>')
	                    .attr("class","igHead")
	                    .append($("<h3>"+"Yankee Stadium"+"</h3>")));
	
	            $.each(result.data, function(index, item){
	            console.log(item);
	                
	                $('#igPop').append(
                    $('<div>').attr("class","igDiv")
                    	.append($("<ul>"))
                        .append($("<li>" + "<img src=" + item.images.thumbnail.url +">" + "</li>")
                        .attr("class", "igImg"))
                        .append($("<li>" + "<h3>" + item.user.full_name + "</h3>" + "</li>")
                        .attr("class", "igName"))
                        .append($("<li>" + "<p>" + "Likes = " + item.likes.count + "</p>" + "</li>")
                            .attr("class","igLikes"))
                    );
            });
            

            }
      });
});      

$("#igNyButton").on('click', function(){

	$.ajax({
	url : "https://api.instagram.com/v1/tags/new_york_city/media/recent?callback=&amp=&client_id=67de772e888b4278a8ca04df8b5f441b",
	dataType: 'jsonp',
	         success : function(result) {
	         console.log(result);
	            	$('#igPop').empty();
	                $('#igPop').append(
	                    $('<div>')
	                    .attr("class","igHead")
	                    .append($("<h3>"+"Yankee Stadium"+"</h3>")));
	
	            $.each(result.data, function(index, item){
	            console.log(item);
	                
	                $('#igPop').append(
                    $('<div>').attr("class","igDiv")
                    	.append($("<ul>"))
                        .append($("<li>" + "<img src=" + item.images.thumbnail.url +">" + "</li>")
                        .attr("class", "igImg"))
                        .append($("<li>" + "<h3>" + item.user.full_name + "</h3>" + "</li>")
                        .attr("class", "igName"))
                        .append($("<li>" + "<p>" + "Likes = " + item.likes.count + "</p>" + "</li>")
                            .attr("class","igLikes"))
                    );
            });
            

            }
      });
});      

$('#clearIg').on('click', function(){
	window.location.reload();	
});
	
////////////////////////////////////***Geolocation with Google Maps***/////////////////////////////

$("#rmButton").on("click", function(){
	navigator.geolocation.getCurrentPosition(works, error);

});

       
var works = function success(position) {
console.log(position.coords);
			var pos = position.coords
		$('#geoPop').empty;				
		$('#geoPop').append(
						$('<div>')
						.attr('class', 'mapDiv')
						.append($('<img src="http://maps.google.com/maps/api/staticmap'+
								'?center='+pos.latitude+'+'+pos.longitude+
								'&zoom=13'+'&size=200x200'+'&maptype=roadmap'+
								'&markers=color:Red|'+pos.latitude+'+'+pos.longitude+
								'&sensor=true" '+'</div>')));
								};	


var error = function(error){
	if(error == 1){
		alert('Geolocation must be active for maps.');
	}
};

$("#hybridButton").on("click", function(){
	navigator.geolocation.getCurrentPosition(works2, error);

});

       
var works2 = function success(position) {
console.log(position.coords);
			var pos = position.coords
		$('#hPop').empty;				
		$('#hPop').append(
						$('<div>')
						.attr('class', 'mapDiv')
						.append($('<img src="http://maps.google.com/maps/api/staticmap'+
								'?center='+pos.latitude+'+'+pos.longitude+
								'&zoom=13'+'&size=200x200'+'&maptype=hybrid'+
								'&markers=color:Red|'+pos.latitude+'+'+pos.longitude+
								'&sensor=true" '+'</div>')));
								};	


var error = function(error){
	if(error == 1){
		alert('Geolocation must be active for maps.');
	}
};

$("#clearGeo").on("click", function(){
	window.location.reload();
});