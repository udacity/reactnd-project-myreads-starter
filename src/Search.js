import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

class Search extends React.Component 
{
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
                        <input type="text" placeholder="Search by title or author"/>
                     </div>
                 </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        </div>
    </div>
                );
    }
}

export default Search;