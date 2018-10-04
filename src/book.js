import React from 'react';
import ShelfChanger from './shelfchanger.js';

const book = (props) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${ props.bookInfo['imageLinks'] == null ? '' : props.bookInfo['imageLinks']['thumbnail'] } )` } }></div>
      <ShelfChanger book={props.bookInfo} handleSelection={props.handleSelection}/>
      </div>
    <div className="book-title">{props.bookInfo['title']}</div>
    <div className="book-authors">{props.bookInfo['authors'] == null ? "Unknown Authors" : props.bookInfo['authors'].join(', ')}</div>
  </div>
  )

export default book;
