import React from "react";
import '../App.css';
import {ShelfChanger} from './ShelfChanger';

export class Book extends React.Component {
  render() {
    let book = this.props.book
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ 
            width: 128, height: 193, 
            backgroundImage: `url(${book.imageLinks? book.imageLinks.smallThumbnail: ''})`
            }}>
          </div>
          <ShelfChanger 
            defaultValue={book.shelf}
            onShelfChange={(value) => {
              this.props.onShelfChange(book, value)
            }} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
    </div>
    )
  }
}
