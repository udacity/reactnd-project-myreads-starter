import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import * as BooksAPI from "../BooksAPI";
import Bookshelf from "../components/Bookshelf";
import { Debounce } from 'react-throttle'



class SearchPage extends Component {


    static propTypes = {
        onMoveBook: PropTypes.func.isRequired,
        shelves: PropTypes.array.isRequired,
    };
    searchBooks = (e) => {
        const query = e.target.value.trim()
        BooksAPI.search(query, 40).then((results) => {
            if (results.length) {
                console.log(results)
                this.setState({books: results})
            }
            else {
                console.log('Error results')
            }
        }).catch((data) => {
            console.log('Unable to search "' + query + '"' + data);
        })
    };

    constructor() {
        super();
        this.state = {
            books: []
        };
    }
    render () {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time='300' handler='onChange'>
                            <input type="text" onChange={this.searchBooks} placeholder="Search by title or author"/>
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    <Bookshelf key="results"
                               shelfName="Search Results"
                               books={this.state.books}
                               onMoveBook={this.props.onMoveBook}
                    />
                </div>
            </div>

        )
    }


}

export default SearchPage