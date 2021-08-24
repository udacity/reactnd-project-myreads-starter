import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import Book from './Book'


class BooksList extends Component{

    render (){
console.log('component')
console.log(this.props)
return (
<div className="list-books-content">
   
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    
                  <ol className="books-grid">
                  <Book ListType = "currentlyReading" {...this.props}/>     
                    </ol>


                  </div>
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">

                    <ol className="books-grid">
                    <Book ListType="wantToRead" {...this.props}/>
                    </ol>

                  </div>
                </div>

                
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">

                    <ol className="books-grid">
                    <Book ListType = "read" {...this.props}/>
                    </ol>

                  </div>
                </div>
              </div>
            </div>

)
}
}
export default BooksList