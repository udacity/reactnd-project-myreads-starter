import React, {Component} from 'react';
import './App.css'
import Book from './Book'
import AddBook from './AddBook'

class SearchBooks extends Component {

  render() {
    const bookshelf_titles = [
      {
        id: 0,
        name: 'Currently Reading'
      },
      {
        id: 1,
        name: 'Want to Read'
      },
      {
        id: 2,
        name: 'Read'
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelf_titles.map((title) => (
              <div key={title.id} className="bookshelf">
                <h2 className="bookshelf-title">{title.name}</h2>
                <div className="bookshelf-books">
                  <Book bookshelf_title={title.name}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AddBook/>
      </div>
    )
  }
}

export default SearchBooks
