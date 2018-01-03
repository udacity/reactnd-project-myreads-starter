import React from 'react';
import * as BookAPI from './BooksAPI.js';


class SearchPage extends React.Component{
	state = {
		showSearchPage: true,
    textInput: ""
	}

//ComponentDidMount

  nextText(val){
    this.setState({textInput:val})
  }

	render(){
		return(
		<div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input value={this.state.textInput} type="text" placeholder="Search by title or author" onchange={this.nextText(this.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              </ol>
            </div>
          </div>
			);
	}	
}


export default SearchPage;