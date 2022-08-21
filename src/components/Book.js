//TODO: CREATE STORE Add redux functions

import React from 'react';
class  Book  extends React.Component {
    

     changeShelfHandler = (chosenShelf, bookID)=>{
        //console.log(`${chosenShelf} and the book is ${bookID}`);
        this.props.changeShelf(bookID, chosenShelf)

    }
render() {
    const { books } = this.props;
    return (
        <ol className="books-grid">
            { books && books.map(book =>(
            <li key={book.id}>
                <div className="book">
                <div className="book-top">
                    
                    <div className="book-cover"                                 
                    style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                    <select onChange={(e)=>this.changeShelfHandler(e.target.value, book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="" hidden></option>

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
}
}
export { Book };