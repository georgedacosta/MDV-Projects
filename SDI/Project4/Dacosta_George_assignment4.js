/*
George Dacosta
SDI 12/12 
Project4
12/13/12
*/


var myLibrary = function(){
	

/* Phone Pattern */
	
	var phoneVal = function(phoneNumber){
    	var phoneRE = /^[0-9]{3}[\-]{1}[0-9]{3}[\-]{1}[0-9]{4}$/;
    	var phoneCk = phoneRE.test(phoneNumber);
    return phoneCk;	
	};


/* Email Pattern	 */
	
	
	var emailVal = function(email){
		var emailRE = /^[\w._%+-]+@{1}[\w-]+\.[a-z]{2,6}$/;
		var emailCK =emailRE.test(email);
	return emailCK;	
		
};
	
	
/* 	URL pattern */
	
	
	var urlVal = function (url) {
		var urlRE = /(?:[\w-]+\.)+[a-z]{2,6}$/;
	var urlCk = urlRE.test(url);
		if((url.indexOf("http:") == 0 || (url.indexOf("https:") == 0))) {
		urlCk = true;
		} else if (check === true) {
		urlCk = true;	
			} else {
		urlCk = false;
			};
		return urlCk;
};
	
	
	
	
	
	
	
	
	
	return {
			"phoneCk":phoneVal,
			"emailCK":emailVal,
			"urlCk":urlVal,
		
	};
};


var library = new myLibrary();

console.log("203-792-9902 = " + library.phoneCk("203-792-9902"));
console.log("email@fso.com = " + library.emailCK("email@fso.com"));
console.log("https://www.mysite.com = " + library.urlCk("https:www.mysite.com"));