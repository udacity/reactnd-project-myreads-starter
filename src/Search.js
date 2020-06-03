import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'

class Search extends React.Component 
{
    state = {
        books : []
    }

    handleChange = (event) =>
    {
       
        console.log(event.target.value);
        this.searchbooks(event.target.value);
    }

    searchbooks = async (query) =>
    {
            BooksAPI.search(query).then((data) =>
            {
                
                console.log(data);
                if(data === undefined)
                {
                    console.log(data);
                }
                else if(data.error === "empty query")
                {
                    console.log(data);
                }
                else
                {
                    this.setState({books : data});
                    console.log("hello2");
                }
                          
            })
        
       
    }
    render()
    {
        
        return (
                <div>
                    <div className="app">
                        <div className="search-books">
                            <div className="search-books-bar">
                                <Link to="/">
                                <button className="close-search" >Close</button>
                                </Link>
                                
                                <div className="search-books-input-wrapper">
                                    <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="search-books-results">
                                <ol className="books-grid">
                                   


                                {

                       this.state.books.map((book ) =>
                       {
                         console.log(book.shelf);
                         
                              return  <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <select value ={book.shelf} id={book.id}  onChange = {(e) =>
                                    {
                                      this.props.updatebookshelf(e.target.id , e.target.value);
                                    }}>
                                      <option value="move" disabled>Move to...</option>
                                      <option value="currentlyReading" >Currently Reading</option>
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

                       }) } 
                                    







                                   
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

export default Search;