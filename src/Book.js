import React, { Component} from "react";
import MoveTo from "./MoveTo.js";

class Book extends Component {


    render() {
        const { book , shelf} = this.props


        if(book && book.authors && book.imageLinks) {
            return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                    }}></div>
                    <MoveTo book={book} shelf={shelf} onUpdateBook={this.props.onUpdateBook}/>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map((author, index) => (
                        <div key={index} className="book-authors">{author}</div>
                    )
                )}
            </div>
            )
        } else if(book && book.imageLinks){
            return(
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}></div>
                        <MoveTo book={book} shelf={shelf} onUpdateBook={this.props.onUpdateBook}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                            <div className="book-authors"><p><em>Author Not Available</em></p></div>

                </div>
            )
        } else if(book && book.authors){
            return(
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193
                        }}></div>
                        <MoveTo book={book} shelf={shelf} onUpdateBook={this.props.onUpdateBook}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors.map((author, index) => (
                            <div key={index} className="book-authors">{author}</div>
                        )
                    )}
                </div>
            )
        }

    }
}

export default Book;