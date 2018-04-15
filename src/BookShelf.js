import React from 'react'
import Select from './Select'
import './App.css'

class BookShelf extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const books= this.props.books;
        return (
                    <ol className="books-grid">
                      {
                        books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <div className="book">
                                      <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(` + book.imageLinks.smallThumbnail+`)` }}></div>
                                            <div className="book-shelf-changer">
                                              <Select value={book.shelf} selectCallback={(e) => this.props.moveToBookShelf(book, e)}/>
                                            </div>        
                                      </div>
                                      <div className="book-title">{book.title}</div>
                                      <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                                )
                            })
                      }
                    </ol>
        )
    }
}

export default BookShelf