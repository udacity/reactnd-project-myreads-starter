import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = (props) => {
    const { title, authors, cover } = props.bookDetails;
    const { width, height, backgroundImage } = cover;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: width, height: height, backgroundImage: backgroundImage }}></div>
          <div className="book-shelf-changer">
            <BookShelfChanger />
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  };

export default Book;