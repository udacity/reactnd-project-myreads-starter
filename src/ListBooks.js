import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class ListBooks extends Component {
    state = {
        books: [],
        shelves: [
                {
                    title: 'Currently Reading',
                    id: 'currentlyReading'
                },
                {
                    title: 'Want to Read',
                    id: 'wantToRead'
                },
                {
                    title: 'Read',
                    id: 'read'
                }
          ]
      }

    componentDidMount = () => {
        BooksAPI.getAll().then((books) => {this.setState({ books })
        })
    }

    updateState = (value, id) => {
        BooksAPI.update({id: id}, value).then((res) => {
            BooksAPI.getAll().then((books) => {this.setState({ books })
            })
        })
    }

    render() {
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    {this.state.shelves.map((shelf) =>
                        <Shelf
                            shelfTitle={shelf.title}
                            id={shelf.id}
                            books={this.state.books}
                            handleSelect={this.updateState}
                            key={shelf.id}/>
                    )}
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
        )
    }
}

export default ListBooks