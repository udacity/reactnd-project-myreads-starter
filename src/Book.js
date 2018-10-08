import React from "react";

export default function Book(props) {
  var title = props.title;
  var image = props.image;
  var author = props.author;
  var bookShelfName = props.bookShelfName;
  var onBookShelfChange = props.onBookShelfChange;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: image }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={event => {
              onBookShelfChange(title, bookShelfName, event.target.value);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}
