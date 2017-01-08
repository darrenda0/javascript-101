// create a string

var name = 'Herbert Wells';

// Structure
console.log(name[0]);					// will print the first character in the string

// Length
console.log(name[name.length - 1]); 	// to determine the last character in a string

// join strings
var firsName = 'Herbert';
var lastName = 'Wells';

// escape characters
var fullName = firsName + ' ' + lastName;	// ' ' = a blank space character
console.log(fullName);
var fullName = firsName + '\n' + lastName;	// \n = new line character
console.log(fullName);


var fullName = 'Herbert Wells';
var firsName = fullName.substr(0, 7);
console.log(firsName);

var lastName = fullName.substr(8, 5);
console.log(lastName);

console.log(fullName.indexOf('ber'));
console.log(name[0] + '.' + name[8] + '.');	// prints initials

var name = 'Jon Snow';
console.log(name[0] + '.' + name[4] + '.');	// prints initials