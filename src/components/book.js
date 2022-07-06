import React from "react";
import { Link } from "react-router-dom";

/**
 * functional component for rendering book details 
 * 
 * has function contains event firing at book sehlf selection change
 * 
 * @param {*} props  sending from component parent
 * @returns final book rendering product
 * 
 */
const Book = (props) => {

  //handel images if not define so return alt text or black book image 
  const {book,  shelfName, bookSender } = {...props};
  const imagePath = (book.bookImage !=='alt')? `${(book.bookImage)}`: '../icons/1021547.png';

  return <div className="book">
      <div className="book-top"> 

        <Link to={bookSender === 'search'?`bookDetails/${book.id}`:`components/bookDetails/${book.id}` } >
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imagePath})` }} />
        </Link>

        <div className="book-shelf-changer">
          <select onChange={(ev) => props.onUpdateBookShelf(ev.target.value, props.book)} defaultValue={`${shelfName}`}>
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
      <div className="book-title">{book.title}</div>
      <div className="book-authors"> {[...book.authors]} </div>
    </div>;
};

export default Book;
