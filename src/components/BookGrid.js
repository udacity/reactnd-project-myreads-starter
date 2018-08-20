import React from 'react'
import {Book} from './Book';
import '../App.css';

export class BookGrid extends React.Component {
  render() {
    let books = this.props.books
    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book 
              book={book} 
              onShelfChange={this.props.onShelfChange} />
          </li>
        ))}
      </ol>
    )
  }
}