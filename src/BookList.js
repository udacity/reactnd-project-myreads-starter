import React , {Component}from 'react'

class BookList extends Component {
    render () {
      let bookShelfs = ["currentlyReading", "wantToRead", "read"];
      let mybooks = bookShelfs.map( (shelf) => (
          this.props.books.filter(book => book.shelf === shelf)
      ));
      return (
            <div className="list-books-content">
            {
              mybooks.map((booksShelf,i) => (
                <div key={bookShelfs[i]} >
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{bookShelfs[i]}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      { booksShelf.map((book) => (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                              <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={(event) => { this.props.onChangeShelf(event, book)}}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title"> {book.title} </div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                        )) }
                      </ol>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )
    }
}

export default BookList