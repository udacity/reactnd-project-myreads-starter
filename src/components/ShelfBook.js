import React from "react";
import '../App.css';
import {Book} from './Book';

export class ShelfBook extends React.Component {
  render() {
    let books = this.props.books
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book 
                book={book} 
                onShelfChange={this.props.onShelfChange}/>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}