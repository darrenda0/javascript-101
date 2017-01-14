// Functions are Objects
// Objects pass by reference
// Functionsl are not a separate data type
// When you use parenthesis you are calling a function
// When you are not using parenthesis you are referencing a function

function printHello() {
	console.log('Hello World');
}

//printHello();

/*
printHello.color = 'Blue';
printHello.count = 7;

for (var key in printHello) {
	console.log(key, '==> ', printHello[key]);
}
*/

//console.log(typeof printHello());
console.log(typeof printHello);