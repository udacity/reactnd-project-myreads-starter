import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js'
import './App.css'

class FrontPage extends Component {



  render(){
    return(
      <div>
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        </div>
        <div className="list-books-content">
        <BookShelf />


          </div>

        <div className="open-search">
        <Link to='/search' />

        </div>
      </div>

    )}




  }


//   <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> link

export default FrontPage;
