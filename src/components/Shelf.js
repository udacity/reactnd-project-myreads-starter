import React , { Component } from 'react';
import Book from './Book';

class Shelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ this.props.shelfName }</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.map((book) => (
                <li key={book.id} className="book-list-item"> 
                  <Book book = { book } changeBookShelf={this.props.changeBookShelf} />
                </li>
              ))}
              </ol>
            </div>
          </div>
        )
    }

}
export default Shelf;