import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


class SearchPage extends Component {
    static propTypes = {
        onMoveBook: PropTypes.func.isRequired,
        shelves: PropTypes.array.isRequired,
    };


    render () {

        // const onMoveBook = this.props.onMoveBook
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                     <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }


}

export default SearchPage