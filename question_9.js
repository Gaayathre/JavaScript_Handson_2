//Create an array of objects, where each object describes a book and has properties for the 
var books_properties = [
    //Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". 
    {title: 'The Design of EveryDay Things', author: 'Don Norman',alreadyRead: false},

    {title: 'The Most Human Human',author: 'Brian Christian',alreadyRead: true}];
  
  for (var i = 0; i < books_properties.length; i++) {
    var book_properties = books_properties[i];
    var book_Information = book_properties.title + '" by ' + book_properties.author;
    //Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". 
    if (book_properties.alreadyRead) {
      console.log('You already read "' + book_Information);
    } else {
      console.log('You still need to read "' + book_Information);
    }
  }