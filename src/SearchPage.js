import React from 'react';
import Book from './Book.js'
import {Link} from 'react-router-dom';
import * as BookAPI from './BooksAPI.js';


class SearchPage extends React.Component{
	state = {
		showSearchPage: true,
    textInput: "",
    searchBooks: []
	}

  updateSearch = (textInput) => {
    this.setState({ textInput: textInput })
  }

  fillShelf() {
    return(<ol className="books-grid">
      {this.state.searchBooks.map(book => (
        <li><Book title={book.title} author={book.authors} image={book.imageLinks.thumbnail}/></li>
        ))}
    </ol>)
  }

	render(){
    if(this.state.textInput){
        BookAPI.search(this.state.textInput).then((searchBooks) => {
        this.setState({searchBooks})
      })
    }

		return(
		  <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search"/>
            <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.

                  onchange={this.nextText(this.value)}
                */}
              <input value={this.state.textInput} type="text" placeholder="Search by title or author" onChange={(event) => this.updateSearch(event.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
             {this.fillShelf()}
          </div>
        </div>
			);
	}	
}


export default SearchPage;