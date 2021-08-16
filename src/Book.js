import React, { Component} from "react";
import MoveTo from "./MoveTo.js";

class Book extends Component {


    render() {
        const {book} = this.props
        if(book && book.authors && book.imageLinks){
            //displays books if they have book and authors and imagelinks
            return(
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            <MoveTo book={book} onMove={this.props.onMove}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author, index)=>(
                                <div key={index} className="book-authors">{author}</div>
                            )
                        )}
                    </div>
                </li>
            )
        } else if(book && book.imageLinks){
            //displays book and has a default for "no Authors"
            return(
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            <MoveTo book={book} onMove={this.props.onMove}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                                <div className="book-authors">
                                    <p><em>Author Not Available</em></p>
                                </div>
                    </div>
                </li>
            )
        } else if (book && book.authors) {
            //displays books with a default for no book image
            return(
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193}}></div>
                            <MoveTo book={book} onMove={this.props.onMove}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                            {book.authors.map((author, index)=>(
                                    <div key={index} className="book-authors">{author}</div>
                                )
                            )}
                        </div>
                    </div>
                </li>
            )
        }

    }
}

export default Book;