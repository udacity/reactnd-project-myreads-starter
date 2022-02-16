import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import BookShelf from './BookShelf';
import bg from './images/bg.jfif';

const shelfFilter = [
  {shelf: 'currentlyReading', index: 1}, 
  {shelf: 'wantToRead', index: 2},
  {shelf: 'read', index: 3}
]
class MainPage extends Component {  
  render() {
    const { books, addBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div>
          <div>haha</div>
          <BookShelf books={books} shelfFilter={shelfFilter} onShelfUpdate={this.props.onShelfUpdate}/>
        </div>
        <Link className="open-search" to='/search'
        state = {{value: 'add book'}}>
          <button>Add a book</button>
        </Link>
      </div>
    )
  }
}
export default MainPage