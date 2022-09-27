import React, { Component, Fragment } from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'


class Book extends Component {

    render () {
        console.log(this.props.books.currentlyReading)
        //console.log(this.props);
        return (
            <Fragment>
            {
            this.props.ListType === "currentlyReading" &&
            (
            this.props.books.currentlyReading.map((book) => {
            return (
              <li key={book.id} >
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={book.style}></div>
                  <div className="book-shelf-changer">
                    <select onChange= {(event)=>this.props.changeHandler(book,event.target.value,'currentlyReading')}>
                      <option value="move" disabled>Move to...</option>
                      <option value="none">None</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li> 
            )
            })
            )}

{ 
            this.props.ListType === "wantToRead" &&
            (
            this.props.books.wantToRead.map((book) => {
            return (
            <li key={book.id} >

              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={book.style}></div>
                  <div className="book-shelf-changer">
                    <select  onChange= {(event)=>this.props.changeHandler(book,event.target.value,'wantToRead')} >
                      <option value="move" disabled>Move to...</option>
                      <option value="none">None</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li> 
            )
            })
            ) 
        }

        {
            (this.props.ListType === "read") &&
            (
            this.props.books.read.map((book) => {
            return (
                <li key={book.id} >
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={book.style}></div>
                  <div className="book-shelf-changer">
                    <select  onChange= {(event)=>this.props.changeHandler(book,event.target.value,'read')}>
                      <option value="move" disabled>Move to...</option>
                      <option value="none">None</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li> 
            )
            })
            ) 
        }
          
            
            </Fragment>
            )
    }
}
export default Book ; 