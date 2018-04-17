import React, {Component} from 'react';

class ListBooks extends Component{
    render(){
        return(
            <div>
                <ol>
                    {this.props.books.map((book) =>
                        <li key = {book.title}>
                            {book.shelf === "currentlyReading" && (
                                <div className="list-books-content">
                                    <div>
                                        <div className="bookshelf">
                                            <h2 className="bookshelf-title">Currently Reading</h2>
                                            <div className="bookshelf-books">
                                                <ol className="books-grid">
                                                    <li>
                                                        <div className="book">
                                                            <div className="book-top">
                                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}/>
                                                                <div className="book-shelf-changer">
                                                                    <select>
                                                                        <option value="none" disabled>Move to...</option>
                                                                        <option value="currentlyReading">Currently Reading</option>
                                                                        <option value="wantToRead">Want to Read</option>
                                                                        <option value="read">Read</option>
                                                                        <option value="none">None</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="book-title">{book.title}</div>
                                                            <div className="book-authors">{book.authors[0]}</div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}
export default ListBooks;