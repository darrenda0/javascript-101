

//Object: a collection of names and values
//Objects use pass by reference

//Primative: can't be broken donw any further
//Primative uses "pass by value" 

/*pass by Value: Whenever you assign a value to another variable javascripts treats it as an 
  independant copy of that value from that point on.  Below, when b=a, b really = the value of a, 
  which is 1.  If "a" changes (eg a++) "b" still remains at 1 because that was the value when we 
  set b=a.
*/


//primative type - pass by value example:
var a = 1;
var b = a;

a++;

console.log(b);

//objects - pass by reference example:

/*Pass by Reference.  whenever you assign d to c you will assign a reference to the same physical 
object stored in memory.  Both c and d are both referencing the same piece of data in memory. 
Whenever you change that data in one of the referenes, it will also change for the other 
reference.
*/

var c = {
	counter: 10
};

var d = c;

c.counter++;

console.log(d.counter);