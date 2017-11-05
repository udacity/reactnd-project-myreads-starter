import React , { Component } from 'react';

class Shelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">this.props.shelfName</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.map((book) => (
                <li key={book.id}> 
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">1776</div>
                    <div className="book-authors">David McCullough</div>
                  </div>
                </li>
              ))}
              </ol>
            </div>
          </div>
        )
    }

}