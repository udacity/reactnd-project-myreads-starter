import React from 'react';
import {Shelf} from './Shelf';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        let bookShelves = [
            {title: "Currently Reading", id: "currentlyReading", books: this.props.currentlyReading},
            {title: "Want to Read", id: "wantToRead", books: this.props.wantToRead},
            {title: "Read", id: "read", books: this.props.read}
        ]

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  {bookShelves.map((shelf) => {
                     return <Shelf 
                        key={shelf.id}
                        shelfTitle={shelf.title}
                        books={shelf.books}
                        onShelfChange={this.props.onShelfChange} />
                  })}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

Home.propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}