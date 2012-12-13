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

/* Differance in two dates */ 

	var difDate = function(startDate, endDate){
		var day1 = 24*60*60*1000;
		var difDates = Math.floor(Math.abs((startDate.getTime() - endDate.getTime())/(day1)));
		return difDates;	
};


/* String to number */

	var stringToNum = function(string){
	return parseFloat(string);
};

/* Array Functions */
/* Number Array */
/* Smallest value in array that is greater than number given */

	var numAr = function(array, giveNum) {
		var smallVal = Number.POSITIVE_INFINITY;
		for (var i = 0; i < array.length; i ++) {
				if (giveNum < array[i] && array[i] < smallVal) {
					      smallVal = array[i]};	
		};
	return smallVal;	
	};	

/* Total value in array */

	var numAdd = function (array){
	var sumNum = 0;
			for (var i = 0; i < array.length; i++){
				if (!isNaN(parseInt(array[i]))) {sumNum += array[i];}
			};
	return sumNum;			
};


/* Array sorted by key */

	var sortKey = function(){
	var array = [{a:3}, {a:1}, {a:2}];
	var key = "a";
			var    compare = function (a, b){
			if (a[key] < b[key]){
				return -1;
				} else if (a[key] > b[key]){
				return 1;
				} else {
				return 0;
				};
		};	
		var sortedKey = array.sort(compare);
	return sortedKey;	
		
	};
	
	
	return {
			"phoneCk":phoneVal,
			"emailCK":emailVal,
			"urlCk":urlVal,
		    "titleCase":titleCase,
		    "swap":charSwitch,
		    "decimal":changeDecimal,
			"getFuzz":numFuzz,		    
		    "difDates":difDate,
		    "stringToNum":stringToNum,
		    "numAr":numAr,
		    "numAdd":numAdd,
		    "sortKey":sortKey
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
console.log("There are " + library.difDates(new Date(2012,06,25), new Date()) + " days between today and when I started my classes on June 25 2012.");
console.log("the string \"15\" is now the number " + library.stringToNum("15"));
console.log("The lowest number of the array that is greater than the number given is, " + library.numAr([3,15,22,9,17], 5));
console.log("The total numbers in the array is = " + library.numAdd([true,8,10,"NaN", false, 12]));
console.log(library.sortKey());