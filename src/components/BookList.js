import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

const BookList = (props) => {

  const {books, updateShelf} = props;

  const read = books.filter( book => book.shelf === 'read');
  const wantToRead = books.filter( book => book.shelf === 'wantToRead');
  const currentlyReading = books.filter( book => book.shelf === 'currentlyReading');

  const handleUpdate = (book, shelf) => {
    updateShelf(book, shelf);
  }

  return(
    <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf bookshelfTitle='Currently Reading' books={currentlyReading} handleUpdate={handleUpdate}/>
            <BookShelf bookshelfTitle='Want to Read' books={wantToRead} handleUpdate={handleUpdate}/>
            <BookShelf bookshelfTitle='Read' books={read} handleUpdate={handleUpdate}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' className='add-btn'> Add a book </Link>
        </div>
    </div>
  );
}

export default BookList;

// get all books on booklist,
// separately keep in array of shelf 
// pass array to bookshelf with list of books of a specific category
// and iterate over books in bookshelf