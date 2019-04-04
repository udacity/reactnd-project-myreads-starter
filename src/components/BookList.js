import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

const BookList = () => {
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf bookshelfTitle='Currently Reading' />
                <BookShelf bookshelfTitle='Want to Read'/>
                <BookShelf bookshelfTitle='Read'/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' className='add-btn'> Add a book </Link>
            </div>
        </div>
    );
}

export default BookList;