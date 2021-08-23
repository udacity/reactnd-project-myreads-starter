import React, { Component, Fragment } from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'


class Book extends Component {

    render () {
        let x=this.props.ListType;
console.log(x,this.props.books.x);

        return (
            <Fragment>
            {
            this.props.ListType == 'Currently Reading' &&
            (
            this.props.books.CurrentRead.map((book) => {
            return (
              <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={book.style}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li> 
            )
            })
            )}

{
            (this.props.ListType == 'Want to Read') &&
            (
            this.props.books.WantToRead.map((book) => {
            return (
              <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={book.style}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li> 
            )
            })
            ) 
        }

        {
            (this.props.ListType == 'Read') &&
            (
            this.props.books.Read.map((book) => {
            return (
              <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={book.style}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li> 
            )
            })
            ) 
        }
          
            } 
            </Fragment>
            )
    }
}
export default Book ; 