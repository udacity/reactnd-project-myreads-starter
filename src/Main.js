import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

class Main extends React.Component 
{
    render(props)
    {
      const books = this.props.books;
      
      const contreading = books.filter((book) =>
      {
         return book.shelf === "currentlyReading" ;
      })
      const wanttoread = books.filter((book) =>
      {
         return book.shelf === "wantToRead" ;
      })
      const read = books.filter((book) =>
      {
         return book.shelf === "read" ;
      })
      
   
     
        return (<div>

         <div className="app">
       
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                       contreading.map((book ) =>
                       {
                         
                              return  <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
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

                       })}
                      
                    </ol>
                  </div>
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                       wanttoread.map((book ) =>
                       {
                         
                              return  <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
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

                       })}
                      
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      read.map((book ) =>
                       {
                         
                              return  <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
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

                       })}
                      
                    </ol>
                  </div>
                </div>
  
              </div>
              </div>
            <div className="open-search">
            <Link to="/search">
            <button >Add a book</button>
            </Link>
              
            </div>
          </div>
        )}
      </div>
        </div>);
    }
}

export default Main;