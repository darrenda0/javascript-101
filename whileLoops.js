// loops:  allows you to repeat a statement or multiple statements multiple times
// while loop
// do while loop

/*
while (expression) 				// an expression is something that validates the boolean
	statements					// a statement repeats as long as the expression is true
*/	

/*
var i = 0;						// initialize at 0
while (i < 3) {					// is i < 3? if, yes (boolean)
	console.log('====');		// then statement says to print to console
	console.log(i++);			// this keeps goint until i is not less than 3
	console.log('====');
}					
console.log('Done');
*/

/* Homework assignment:
cout how many words are there that have:
> 4 characters 	- 15%
4 characters	- 05%
5 characters	- 10%
< 5 characters	- 10%
then output the numbers in percentages over the total words in the sentence.
*/

var text = 'Success is peace of mind'; 
//var words = 0;
//for var i = 0; i < Word.count.length; i++
//	if (str(i) === +)
//console.log(text[0]);
//console.log(text.length);
//console.log(veryShortWord);

console.log(text);
console.log(text.length);
console.log(text[text.length - 1]);
console.log(text.indexOf('i'));

var i = 0;
while (i < text.length) {
console.log(text[i] + i++);
}

