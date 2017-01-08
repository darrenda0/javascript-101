

/*
var book = {
	title: 'The Time Machine',
	pageCount: 100,
	author: {
		firstName: 'Herbers',
		lastName: 'Wells',
		country: {
			name: 'England',
			latitude: 51,
			longitude: 0 
		}
	}
}
*/

/*
var latitude = book.author.country.latitude;				//dot syntax

var longitude = book['author'] ['country'] ['longitude'];	//square bracket syntax

console.log(latitude, longitude);
*/

/*
//To delete a property
book.color = 'red';
console.log(book.color);

delete book.color;
console.log(book.color);
*/

/*
// List all available properties of an object - use a special loop called: for in loop
for (var key in book) {
	console.log(key);
}
*/

/*
//To see if a key exists in an object
if ('author' in book) {
	console.log('Key Exits');
}
*/


//homework: merge two objects together

// vehicle object
var vehicle = {
	numberOfWheels : 4,
	engineType : 'gas',
	tranmission : 'automatic',
	numberOfDoors : '2',
	car : {
		isConvertible: 'true'
	},
	truck: {
		isFourWheelDrive: 'true'
	}
}

console.dir(vehicle);

for (var key in vehicle){
	console.log(key);
}


/*
// car object
var car = {
	numberOfWheels: 4,
	engineType: 'gas',
	tranmission: 'manual',
	numberOfDoors: 2,
	isConvertible: 'true'
}

for (var key in car){
	console.log(key);
}

//truck object
var truck = {
	numberOfWheels: 4,
	engineType: 'gas',
	numberOfDoors: '2',
	isFourWheelDrive: 'true'
}

for (var key in truck){
	console.log(key);
}

console.dir(vehicle);
console.dir(car);
*/