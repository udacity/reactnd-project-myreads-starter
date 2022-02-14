import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class MainPage extends Component {
  render() {
    const { books, addBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf books={books} onShelfUpdate={this.props.onShelfUpdate}/>
        <Link className="open-search" to={{
          pathname: '/search',
          state: { value: 'hello' }
        }}>
          <button>Add a book</button>
        </Link>
      </div>
    )
  }
}
export default MainPage