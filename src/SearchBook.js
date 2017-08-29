import React, {Component} from 'react';
import BookGrid from './BookGrid';
import {Link} from 'react-router-dom';
import serializeForm from 'form-serialize';


class SearchBook extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const values =serializeForm(e.target, {hash:true});
        this.props.onSearch(values.searchTerm);
    }

    render(){
        return (    
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                  <form  onSubmit={this.handleSubmit}>  
                    <input type="text" name="searchTerm" placeholder="Search by title or author"/>
                  </form>
                </div>
                </div>
                <div className="search-books-results">
                <BookGrid data={this.props.searchedBooks} onUpdate={this.props.onUpdate} />
                </div>
            </div>
        );
    }
}

export default SearchBook;