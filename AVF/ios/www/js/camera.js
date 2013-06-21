/*
George Dacosta
AVF 1306
camera.js
June 18, 2013
*/

/* Reset page */

$("#takePic").on("click", function(){
	takePhoto();
	
});

	var picSource;   
    var destinationType; 

    document.addEventListener("deviceready",devIsReady,false);
    
    var devIsReady = function () {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    };

    var phDataWorks = function(imageData) {
      var smImg = document.getElementById('imgPop');

      smImg.style.display = 'block';

      smImg.src = "data:image/jpeg;base64," + imageData;
    };

    var picUriWorks = function(imageURI) {
    
      var lgImg = document.getElementById('lgImg');

      lgImg.style.display = 'block';

      lgImg.src = imageURI;
    };

    var takePhoto = function() {
      navigator.camera.getPicture(phDataWorks, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    };


    var onFail = function(message) {
      alert('Oops! ' + message);
    };


