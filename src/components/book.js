import React from "react";

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
  const imagePath = (props.book.bookImage !=='alt')? `${(props.book.bookImage)}`: '../icons/1021547.png';

  return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:`url(${imagePath})`
            }}
          />
          <div className="book-shelf-changer">
            
            <select onChange={(ev) => props.onUpdateBookShelf(ev.target.value , props.book)} defaultValue={`${props.shelfName}`}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading" >Currently Reading</option>
              <option value="wantToRead" >Want to Read</option>
              <option value="read" >Read</option>
              <option value="none" >None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors"> {[...props.book.authors]} </div>
      </div>
  );
};

export default Book;
