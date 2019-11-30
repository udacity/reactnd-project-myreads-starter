import React, {Component} from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

class SearchResults extends Component {
    static propTypes = {
        changeShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
       };

render(){
    const { searchResults, changeShelf } = this.props;

    return(
<div className="search-books-results">
            <h2 className="search-results-title"> Search Results: </h2>
            <div className="columns books-grid">     
              {searchResults.map(book => (
                <BookCard                  
                  book={book}
                  key={book.id}
                  changeShelf={changeShelf}
                />
              ))}                            
            </div>
          </div>
    )
}
}

export default SearchResults;