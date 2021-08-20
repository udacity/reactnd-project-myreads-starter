import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
export class SearchBook extends Component {

    constructor(props){
        super(props)

        this.state={
            myquery: '',
            query: []
        }
    }

    updateQuery = (quer)=>{
        if(quer.length > 0){
          BooksAPI.search(quer)
          .then((booksresponse)=>{
            if(booksresponse.error){
              this.setState({ query: [] })
            }
            else{
              this.setState({ query: booksresponse })
            }
          }).catch(this.setState({ query: [] }))
        }
        else{
          this.setState({ query: [] })
        }
      };

    render() {

        const { changeBook, books } = this.props
        
        this.state.query.forEach(function(searchedBook){
            books.forEach(function(book){
                if (book.id === searchedBook.id) {
                searchedBook.shelf = book.shelf;
                }
            });
            if(!searchedBook.shelf){
                searchedBook.shelf = 'none';
            }
            })


        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">

                    
                    <Link to='/' className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        
                        <input type="text"
                        value={this.myquery}
                        onChange={(event)=>this.updateQuery(event.target.value)}
                        placeholder="Search by title or author"/>

                    </div>
                    </div>
                    <div className="search-books-results">
                    <ol className="books-grid">
                        {
                        this.state.query.map((searchedBook)=>(
                            <li key={searchedBook.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${searchedBook.imageLinks && searchedBook.imageLinks.thumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                    
                                    <select onChange={(e)=>changeBook(e.target.value,searchedBook)} value={searchedBook.shelf}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>

                                    </div>
                                </div>
                                <div className="book-title">{searchedBook.title}</div>
                                <div className="book-authors">{searchedBook.authors && searchedBook.authors.join(', ')}</div>
                                </div>
                            </li>
                        ))
                        }
                    </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBook
