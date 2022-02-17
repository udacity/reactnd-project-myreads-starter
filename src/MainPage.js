import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import LeftPanel from './LeftPanel';

const shelfFilter = [
  {shelf: 'currentlyReading', shelfName: 'Currently Reading', index: 1}, 
  {shelf: 'wantToRead', shelfName: 'Want To Read', index: 2},
  {shelf: 'read', shelfName: 'Have Read Already',index: 3}
]
class MainPage extends Component {  
  render() {
    const { books, addBook } = this.props;
    return (
      <div className="list-books">
        {/* <div className="list-books-title">
          <h1>Ivan's Bookshelf</h1>
        </div> */}
        <div style={{display: 'flex'}}>
          <LeftPanel shelfFilter={shelfFilter}/>
          <BookShelf books={books} shelfFilter={shelfFilter} onShelfUpdate={this.props.onShelfUpdate}/>
        </div>
        <Link className="open-search" to='/search' state = {{value: 'add book'}}>
          <button>Add a book</button>
        </Link>
      </div>
    )
  }
}
export default MainPage