import React, {Component} from 'react';
import ListCurrentlyReadingBooks from './ListCurrentlyReadingBooks';
import ListWantToReadBooks from './ListWantToReadBooks';
import ListReadBooks from './ListReadBooks';
import {Link} from 'react-router-dom';

class ListBooks extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <ListCurrentlyReadingBooks currentlyReadingBooks={this.props.currentlyReading}
                                           addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                                           addToWantToRead={(book) => this.props.addToWantToRead(book)}
                                           addToRead={(book) => this.props.addToRead(book)}
                                           removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                                           removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                                           removeFromRead={(book) => this.props.removeFromRead(book)}
                                           updateBookShelf={(book, shelf) => this.props.updateBookShelf(book, shelf)}/>
                <ListWantToReadBooks wantToReadBooks={this.props.wantToRead}
                                     addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                                     addToWantToRead={(book) => this.props.addToWantToRead(book)}
                                     addToRead={(book) => this.props.addToRead(book)}
                                     removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                                     removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                                     removeFromRead={(book) => this.props.removeFromRead(book)}
                                     updateBookShelf={(book, shelf) => this.props.updateBookShelf(book, shelf)}/>
                <ListReadBooks readBooks={this.props.read}
                               addToCurrentlyReading={(book) => this.props.addToCurrentlyReading(book)}
                               addToWantToRead={(book) => this.props.addToWantToRead(book)}
                               addToRead={(book) => this.props.addToRead(book)}
                               removeFromCurrentlyReading={(book) => this.props.removeFromCurrentlyReading(book)}
                               removeFromWantToRead={(book) => this.props.removeFromWantToRead(book)}
                               removeFromRead={(book) => this.props.removeFromRead(book)}/>

                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;