import React, {Component} from "react";
import PropTypes from "prop-types";
import {Rate} from "antd";
import BookItem from "../BookItem";

class CurrentlyReading extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render() {

        const {books} = this.props;
        let currentlyReading;
        console.log(books, "currently");
        currentlyReading = books.filter(c => c.shelf === 'currentlyReading');
        console.log(currentlyReading, "currently");
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Our Selection</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookItem books={currentlyReading}/>
                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentlyReading;