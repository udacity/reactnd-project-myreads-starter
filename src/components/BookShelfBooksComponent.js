import React from "react";
import '../App.css';
import {BookComponent} from './BookComponent';

export class BookShelfBooksComponent extends React.Component {
  render() {
    let books = this.props.books
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.title}>
              <BookComponent book={book}/>
            </li>
          ))};
        </ol>
      </div>
    )
  }
}