import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import Bookshelf from "../components/Bookshelf";
import { Debounce } from 'react-throttle'



class SearchPage extends Component {


    static propTypes = {
        onMoveBook: PropTypes.func.isRequired,
        searchBooks: PropTypes.func.isRequired,
        results: PropTypes.array.isRequired,
    };

    render () {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time='300' handler='onChange'>
                            <input type="text" onChange={this.props.searchBooks} placeholder="Search by title or author"/>
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    <Bookshelf key="results"
                               shelfName="Search Results"
                               books={this.props.results}
                               onMoveBook={this.props.onMoveBook}
                    />
                </div>
            </div>

        )
    }


}

export default SearchPage