import React, { Component} from "react";
import MoveTo from "./MoveTo.js";

class Book extends Component {
    render() {
        const {book} = this.props
        if(book && book.authors){
            return(

                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            <MoveTo book={book}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {console.log( "value of authors", book.authors)}
                        {book.authors.map((author, index)=>(
                                <div key={index} className="book-authors">{author}</div>
                            )
                        )}
                    </div>
                </li>
            )
        } else {
            return(
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            <MoveTo book={book}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                                <div className="book-authors"><em>Author Not Available</em></div>
                    </div>
                </li>
            )
        }

    }
}

export default Book;