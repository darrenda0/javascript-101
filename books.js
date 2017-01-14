
var books = [
{
	title: "Prelude to Foundation",
	author: "Isaac Asimov",
	numberOfPages: 512
},
	
{
	title: "The Tombs of Atuan",
	author: "Ursula K. Le Guin",
	numberOfPages: 192
},

{
	title: "Starship Troopers",
	author: "Robert A. Heinlein",
	numberOfPages: 263
}

];

function findBiggestBook(books) {
	
	var book = null;
	var maxPages = 0;

	for (var i = 0; i < books.length; i++) {
		if (books[i].numberOfPages > maxPages) {
			maxPages = books[i].numberOfPages;
			book = books[i];
		}
	}		
	
	return book;
}


function printAllBooks(books) {
	for (var i = 0; i < books.length; i++) {
		console.log((i + 1) + '. ' +  books[i].title 
		+ ' by ' + books[i].author);
	}
}

printAllBooks(books);

var biggestBook = findBiggestBook(books);

console.log(biggestBook);

