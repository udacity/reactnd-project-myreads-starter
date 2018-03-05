import React, {Component} from "react";
import PropTypes from "prop-types";
import {Rate} from "antd";
import BookItem from "../BookItem";

class CurrentlyReading extends Component {;

    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render() {


        const {books} = this.props;
        console.log(books, "book")
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Our Selection</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookItem books={books}/>
                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentlyReading;