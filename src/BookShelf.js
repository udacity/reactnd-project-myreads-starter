import React, {Component} from 'react'
import BookDetails from './BookDetails'


class BookShelf extends Component {
    render () {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <BookDetails />
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf