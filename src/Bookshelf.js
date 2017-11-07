import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {

  render(){
    return (
      <div className="bookshelf">
        {this.props.title && <h2 className="bookshelf-title">{this.props.title}</h2>}
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props.books.map((book) => (
              <li key={book.id}>
                <Book
                  moveBookshelf={this.props.updateBooksInShelf}
                  title={book.title}
                  id={book.id}
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
