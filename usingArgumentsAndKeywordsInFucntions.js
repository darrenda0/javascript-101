//Using Arguments and Keywords in Functions
//No 'var' in front of an argument
//Arguments use the same rules as variables
//Return keyword returns and terminated the function resolution i.e.
// if you have already given a value to the fuction, it will not due anything else

function add(a, b, c) {		//pass two arguments: a and b
//	console.log(a + b + c);

	if (a < 3) {
		return a + b;
	} else {
		return c + a;
	}
	
//	return a + b + c;		
//	console.log('done');
}

//add (5, 6, 2);			// 5 gets assigned to argument a, and 6 gets assigned to argument b
var results = add(5, 1, 2)

console.log(results);

