import Reach, { Component} from "react";
import React from "react";
import MoveTo from "./MoveTo.js";
import * as BooksAPI from './BooksAPI';

class Book extends Component {
    render() {
        return(
            <li>
            <div className="book">
                <div className="book-top">
                    {/*<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>*/}
                    {/*//How to get image from object.imageLinks?? this.props.book.imageLInks.smallTHumbnail   */}
                    <div className="book-cover" style={{ width: 128, height: 193}}></div>
                        <MoveTo />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {this.props.book.authors.map((author, index)=>(
                        <div key={index} className="book-authors">{author}</div>
                        )
                    )}
            </div>
    </li>
        )
    }
}

export default Book;