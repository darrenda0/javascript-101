// What is the difference between "if" and "case"?
// "if" allows you to: choose from only two branches (if/else)
// "switch" allows your to choose from multiple cases (case 1/2/3/default/etc.)


var genre = 'science fiction';

switch (genre) {
	case 'science fiction' :
		console.log ('=====');
		console.log ('Dune, Ender\'s Game');
		console.log ('=====');
	break;
	case 'family' :
		console.log ('Peter Pan, Dora');
	break;
	case 'action' :
		console.log ('Mission Impossible, Terminator');
	break;

	default :
		console.log ('default recommendation is: I Robot');
	break;
}