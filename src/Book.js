import React, { Component} from "react";
import MoveTo from "./MoveTo.js";

class Book extends Component {
    render() {
        const {book} = this.props

        return(

            <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                        <MoveTo book={book}/>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map((author, index)=>(
                        <div key={index} className="book-authors">{author}</div>
                        )
                    )}
            </div>
    </li>
        )
    }
}

export default Book;