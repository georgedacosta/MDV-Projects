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
	
/* Title-case string */
	
	
	var titleCase = function(string) {
		
		var initCap = function(string) {
			return string.charAt(0).toUpperCase() + string.substr(1);
	};
		initCapped = string.replace(/\w\S*/g, initCap);
	return initCapped;
	};

/* String seperator manipulation */	
	
	
	var charSwitch = function(string, seperator1, seperator2) {
		var swap = string.split(seperator1).join(seperator2);
	return swap	
    };
	
	
/* Number Block	 */
/* Decimal Placement */


    var changeDecimal = function(number) {
	    var decimal = number.toFixed(2);
	return decimal;    
};


/* Fuzzy Match */

	var numFuzz = function(num1,num2, percentage){
		var compare = num2*(percentage/100);
		var getFuzz = (num1 >= num2 - compare && num1 <= num2 + compare);
	return getFuzz	
};







	
	
	return {
			"phoneCk":phoneVal,
			"emailCK":emailVal,
			"urlCk":urlVal,
		    "titleCase":titleCase,
		    "swap":charSwitch,
		    "decimal":changeDecimal,
			"getFuzz":numFuzz,		    
		    
		    
		    
		    
	};
};










































var library = new myLibrary();

console.log("203-792-9902 = " + library.phoneCk("203-792-9902"));
console.log("email@fso.com = " + library.emailCK("email@fso.com"));
console.log("https://www.mysite.com = " + library.urlCk("https:www.mysite.com"));
console.log("say hello to my little friend = " + library.titleCase("say hello to my little friend"));
console.log("x,y,z = " + library.swap("x,y,z",",","/"));
console.log("5.7 = " + library.decimal(5.7));
console.log("getFuzz = " + library.getFuzz(30,50,90));