import React from 'react';

const Book = (props) => {

  const handleChange = (event) => {
    props.handleUpdate(props.book, event.target.value)
  }

  const { url, title, authors, book } = props;

  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${url && url.smallThumbnail}")` }}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={handleChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors && authors.map( author => author+' \n')}
      </div>
    </div>
  );
}

export default Book;