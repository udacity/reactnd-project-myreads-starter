import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger';
import {Link} from 'react-router-dom'


class SearchBook extends Component {

    onSelectChange = () => {

    }

    render() {
        return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">Close Search</Link>  
            <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
                    <input type="text" placeholder="Search by title or author"/>

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                              <div className="book-shelf-changer">
                                <BookShelfChanger shelfList={this.props.books.map((book)=>book.shelf)} 
                                                  selectedShelf={book.shelf}
                                                  onSelectChange = {this.onSelectChange}/>
                              </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>                    
                    ))
                    }                    
                </ol>
            </div>
        </div>
      )
    }
}

export default SearchBook