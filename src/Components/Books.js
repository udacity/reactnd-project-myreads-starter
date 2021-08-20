import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import * as BooksAPI from '../BooksAPI'
export class Books extends Component {
    
    constructor(props){
      super(props)

      this.state ={ 
        isUpdated: false,
        
      }
    }

  static propTypes = {
    books: PropTypes.array.isRequired,
  }
 
    render() {
        
        const {books,changeBook} = this.props
        
        return (
            <div>
                
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {   

                       books.filter((bookshelf)=>bookshelf.shelf === 'currentlyReading').map((book)=>( 
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(e)=>changeBook(e.target.value,book)} defaultValue={(book.shelf) ? book.shelf : "none"}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                        ) )                             
                        
                    } 
                    </ol>
                  </div>
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {   

                      books.filter((bookshelf)=>bookshelf.shelf==='wantToRead').map((book)=>( 
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(e)=>changeBook(e.target.value,book)} defaultValue={(book.shelf) ? book.shelf : "none"}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                        ) )                             
                        
                    } 
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {   

                    books.filter((bookshelf)=>bookshelf.shelf==='read').map((book)=>( 
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(e)=>changeBook(e.target.value,book)} defaultValue={(book.shelf) ? book.shelf : "none"}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                        ) )                             
                        
                    } 
                    </ol>
                  </div>
                </div>
                   
            </div>
        )
    }
}

export default Books
