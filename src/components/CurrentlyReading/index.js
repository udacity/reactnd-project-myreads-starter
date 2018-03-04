import React, {Component} from "react";
import PropTypes from "prop-types";
import {Rate} from "antd";
import BookItem from "../BookItem";

class CurrentlyReading extends Component {
    constructor(props) {
        super(props);
        this.state = {books: this.props.books}
    }

    render() {

        const {books} = this.props;
        let currentlyReading;
        currentlyReading = books.filter(c => c.shelf === 'currentlyReading');

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Our Selection</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookItem shelf={currentlyReading} books={books}/>
                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentlyReading;