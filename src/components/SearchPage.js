import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Callbacks from '../components/Callbacks';
class SearchPage extends Component {
    state = {
        queryText: '',
        queryResults: []
    };

    handleOnChange = (e) => {
        this.setState(() => ({
            queryText: e.target.value.trim()
        }))
    }

    render() {    
        const  {queryResults} = this.state;
        const showQueryResult = (queryText) => {
            
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.queryText}
                            onChange={(e) => this.handleOnChange(e)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            queryResults.map((result, index) => 
                                <li key={index} >
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${result.imageLinks.thumbnail})` }}></div>
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
                                        <div className="book-title">{result.title}</div>
                                        <div className="book-authors">{result.authors}</div>
                                    </div>
                                </li>
                            )
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;
