//TODO: CREATE STORE Add redux functions

import React from 'react'
export const Book =({books, changeShelf})=> {
    const changeShelfHandler =(chosenShelf, bookID)=>{
        console.log(`${chosenShelf} and the book is ${bookID}`);
     //changeShelf(bookId);
     //console.log(e.targe.value);

    }
    
return (
    <ol className="books-grid">
        { books.map(book =>(
        <li key={book.id}>
            <div className="book">
            <div className="book-top">
                
                <div className="book-cover"                                 
                style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                <select onClick={(e)=>changeShelfHandler(e.target.value, book.id)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.map(author => author)}</div>
            </div>
        </li>
        ))}
                      
                      
    </ol>
)
};