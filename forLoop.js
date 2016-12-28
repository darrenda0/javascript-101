
// for loop: Used for iterating through a sequence of values and you need to track the index of the iteration
var title = 'The Time Machine';

for (var i = 0; i < title.length; i++)	{		// i = 0 is the initializer, which tells what to do before the first itieration 
									// 1 < 5 is a condition, i++ executed after each iteration
	console.log(title[i] + i);
}