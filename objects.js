
/*
Objects
Objects have properties
Each property has a key/value pair
A key is always a string
A value can be any datatype
Properties are separated by commas
*/

/*
var book = {
	title: 'The Time Machine',		//Key is title, Value: The Time Machine
	pageCount: 100
	isInteresting: true
}
*/

var cup = {
	color: 'white',
	size: 'Venti',
	'coffee type': 'latte'
}

cup['coffee type'] = 'Americano';

//add new key to the object
cup.temperature = 90;

console.log(cup.temperature);

console.log(cup.color, cup.size)	//dot syntax - most common

console.log(cup['color']);			// square bracket syntax - more powerful than dot syntax

var key = 'coffee type'
console.log(cup[key]);

console.dir(cup);					// print the contents of the object		