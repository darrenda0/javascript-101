
// Relational operators:
// ==		equals
// != 		not equals
// < >		less than, greater than
// <= >=	less than or equals, greater than or equals

// Logical operators:
// && 		AND
// !		NOT
// ||		OR


var login = "John";
var email = "ooo";
var tel = "";

var firstRule = login.length >=3 && login.length < 20;
var secondRule = email.length > 0 || tel.length > 0;
var formResult = firstRule && secondRule;
//console.log(formResult);


if (formResult) {
	console.log("=================");
	console.log("= Form is Valid =");
	console.log("=================");
} else {
	console.log("=================");
	console.log("= Form is Wrong =");
	console.log("=================");
}

//var numPages = 200;
//if (numPages < 50) {
//	console.log("Casual read");
//} else if (numPages < 200) {
//		console.log("Evening read")
//} else {
//		console.log("Weekend read");
//}

//var numPages = 220;

//var bookType = numPages < 300 ? "Small read" : "Big read";
//console.log(bookType);


