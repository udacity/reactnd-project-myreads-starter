import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js'
import './App.css'

class Home extends Component {

  render(){
    // shelfs, is the possible shelfs that the books can be on
    const shelfs = [
    {
    id: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    id: 'wantToRead',
  name: 'Want to Read'
  },
  {
    id: 'read',
  name: 'Read'
  }]

    return(
      <div>
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        </div>
        <div className="list-books-content">

        {
// loops through all the books in the app.js state on each shelf. Then passes shelf props to  BookShelf.js
          shelfs.map((shelf) =>
          (

          <BookShelf key={shelf.id} name={shelf.name} onUpdateShelf={this.props.onUpdateShelf} books={this.props.books.filter(
            (book) => (shelf.id === book.shelf )
          )}/>
          ))}
          </div>

        <div className="open-search">
        <Link to='/search' />

        </div>
      </div>
    )}
  }

export default Home;
