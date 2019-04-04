import React from 'react';
import BookShelf from './BookShelf';

const BookList = () => {
    return(
        <div>
            <div className="list-books-content">
              <div>
                <BookShelf bookshelfTitle='Currently Reading' />
                <BookShelf bookshelfTitle='Want to Read'/>
                <BookShelf bookshelfTitle='Read'/>
              </div>
            </div>
        </div>
    );
}

export default BookList;