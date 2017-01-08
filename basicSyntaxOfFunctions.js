// Basic Syntax of Functions
// Functions are small building blocks that can be reused

function printDecor() {
	console.log('----------')
}

function printHello(){
	printDecor();
	console.log('Hello There!');
	printDecor();
}

for (var i = 0; i < 2; i++)
	printHello();
