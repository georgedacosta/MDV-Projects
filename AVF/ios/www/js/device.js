/*
George Dacosta
AVF 1306
device.js
June 16, 2013
*/

/* Reset page */

$("#clearBtn").on("click", function(){
	window.location.reload();
});

/* Function to check network status */

$("#networkButton").on("click", function(){
	
	

	document.addEventListener("deviceready", devIsReady, false);

        function devIsReady() {
        whatConnect();
    }

    function whatConnect() {
        var netType = navigator.connection.type;

        var kind = {};
        kind[Connection.UNKNOWN]  = 'Unknown connection';
        kind[Connection.ETHERNET] = 'Ethernet connection';
        kind[Connection.WIFI]     = 'WiFi connection';
        kind[Connection.CELL_2G]  = 'Cell 2G connection';
        kind[Connection.CELL_3G]  = 'Cell 3G connection';
        kind[Connection.CELL_4G]  = 'Cell 4G connection';
        kind[Connection.NONE]     = 'No network connection';

        alert('Connected Through: ' + kind[netType]);
    }
 });  
 
/*  Function to get device info */
 $("#deviceButton").on("click", function(){
 
  document.addEventListener("deviceready", devIsReady, false);

/*     Cordova ready to dance */
    
    function devIsReady() {
        var element = document.getElementById('deviceProperties');
        	$('#devicePop').empty;
        	$('#devicePop').append(
                    $('<div>')
                    .attr("class","deviceDiv")
                    .append($("<h4>" + "Device Name: " + device.name +  "</h4>")
                    .attr("class", "devName"))
                    .append($("<h4>"+ "Device Cordova: "+ device.cordova + "</h4>"))
                    .append($("<h4>"+ "Device Platform: " + device.platform + "</h4>"))
                    .append($("<h4>"+ "Device UUID: " + device.uuid + "</h4>"))
                    .append($("<h4>"+ "Device Model: " + device.model + "</h4>"))
                    .append($("<h4>"+ "Device Version: " + device.version + "</h4>")));
    }
	 
 });
 
$("#accelButton").on("click", function(){
	// Wait for Cordova to load
    //
    document.addEventListener("deviceready", devIsReady, false);

    // Cordova is ready
    //
    function devIsReady() {
        navigator.accelerometer.getCurrentAcceleration(works, error);
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function works(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    // onError: Failed to get the acceleration
    //
    function error() {
        alert('onError!');
    }

	
	
	
});