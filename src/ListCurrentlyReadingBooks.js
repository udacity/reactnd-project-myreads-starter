import React, {Component} from 'react';

class ListCurrentlyReadingBooks extends Component{
    updateBookShelf(e, book) {
        console.log("Selected", e.target.value);
        const bookShelf = e.target.value;
        //insert the book to a different bookshelf
        //remove the book from the old bookshelf
        this.props.addToRead(book);
        this.props.removeFromCurrentlyReading(book);

        switch (bookShelf){
            case "currentlyReading":
                this.props.addToCurrentlyReading(book);
                break;
            case "wantToRead":
                break;
            case "read" :
                this.props.addToCurrentlyReading(book);
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <ol>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                {this.props.currentlyReadingBooks.map((book) =>
                                    <li key={book.title}>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                <li>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{
                                                                width: 128,
                                                                height: 193,
                                                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                                            }}/>
                                                            <div className="book-shelf-changer">
                                                                <select onChange={(event) => this.updateBookShelf(event, book)}>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading
                                                                    </option>
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
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>
                </ol>
            </div>
        )
    }
}

export default ListCurrentlyReadingBooks;