import React from 'react';
//import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Bookshelf extends React.Component {

  render(){
    const shelf = this.props.shelf;
    const books = this.props.books;
    return (

      <div className="bookshelf">
        ESTANTE
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((book) => (
              <li key={book.id}>
                <Book
                  changeShelf={this.updateShelf}
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  cover={book.imageLinks.thumbnail}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

}

export default Bookshelf;
