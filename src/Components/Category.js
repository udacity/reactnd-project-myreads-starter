import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Category extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
      }
    
    render() {
        const {books} = this.props

        return (
            <div>
                
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {   

                        books.map((book)=>(
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
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

export default Category
