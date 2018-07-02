import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger';
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBook extends Component {

    state = {
        query:''
    }

    updateQuery = (query) => {
        this.setState({query:query.trim()})
    }

    clearQuery = () => {
        this.setState({query:''})
    }; 
  
    render() {
        const {query} = this.state

        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query),'i')
            showingBooks = this.props.books.filter((books) => match.test(books.title) || match.test(books.authors) )
        }           
        else {
            showingBooks = this.props.books;
        }

        showingBooks.sort(sortBy('name'))
        
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
            <input type="text" 
                   onChange={ (event) => this.updateQuery(event.target.value)} 
                   placeholder="Search by title or author"/>

            </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {showingBooks.map((book) => (
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                              <div className="book-shelf-changer">
                                <BookShelfChanger shelfList={this.props.shelfList}
                                                  selectedShelf = {book.shelf}
                                                  book={book}/>
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