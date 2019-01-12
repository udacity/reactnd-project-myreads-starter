import React from "react";

function Book(props) {
  const style = {
    width: 128,
    height: 188,
    backgroundImage: props.book.imageLinks
      ? props.book.imageLinks.thumbnail
      : "https://raw.githubusercontent.com/artnerdnet/reactnd-project-myreads-starter/searchFeature/src/img/default-cover.png"
  };
  
  const changeToShelf = event => {
    props.updateShelf(props.book, event.target.value);
    event.preventDefault();
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style}>
          <img
            src={style.backgroundImage}
            style={style}
            alt={props.book.title}
          />
        </div>
        <div className="book-shelf-changer">
          <select value={props.book.shelf} defaultValue='none' selected='none' onChange={changeToShelf}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-author"> {props.book.authors ? props.book.authors.join(' & ') : ''}</div>
    </div>
  );
}

export default Book;
