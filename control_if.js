var login = "John";
var email = "";
var tel = "";

var firstRule = login.length >= 3 && login.length < 20;
var secondRule = email.length > 0 || tel.length >0;
var formResult = firstRule && secondRule;

//if (formResult) {
//	console.log("=================");
//	console.log("= Form is valid =");
//	console.log("=================");
//} else{
//	console.log("=================");
//	console.log("= Form is wrong =");
//	console.log("=================");
//}

var numPages = 30;													//First lesson

var bookType = numPages < 300 ?	"Small read" : "Big read";			//Third lesson
	console.log(bookType);

//if (numPages < 50) {
//	console.log("Casual read");										// First lesson
//}

//if (numPages >= 50 && numPages <200) {							//First lesson
//	console.log("Evening read");									//First lesson
//}

//if (numPages >= 200) {											//First lesson
//	console.log("Weekend read")										//First lesson
//}																	//First lesson
//else if (numPages <200) {											//Second lesson
//	console.log("Evening read");									//Second lesson
//	} else {														//Second lesson
//		console.log("Weekend read")									//Second lesson
//}																	//Second lesson

//if (numPages <300) {												//Third lesson			
//	console.log ("Small book");										//Third lesson
//} else {															//Third lesson
//	console.log ("Big book");										//Third lesson
//}