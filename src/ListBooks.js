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
                <Link
                    to='/search'
                >Test Search Link</Link>

                <ListCurrentlyReadingBooks currentlyReadingBooks={this.props.currentlyReading}
                                           addToCurrentlyReading={(book) => this.addToCurrentlyReading(book)}
                                           addToWantToRead={(book) => this.addToWantToRead(book)}
                                           addToRead={(book) => this.addToRead(book)}
                                           removeFromCurrentlyReading={(book) => this.removeFromCurrentlyReading(book)}
                                           removeFromWantToRead={(book) => this.removeFromWantToRead(book)}
                                           removeFromRead={(book) => this.removeFromRead(book)}/>
                <ListWantToReadBooks wantToReadBooks={this.props.wantToRead}
                                     addToCurrentlyReading={(book) => this.addToCurrentlyReading(book)}
                                     addToWantToRead={(book) => this.addToWantToRead(book)}
                                     addToRead={(book) => this.addToRead(book)}
                                     removeFromCurrentlyReading={(book) => this.removeFromCurrentlyReading(book)}
                                     removeFromWantToRead={(book) => this.removeFromWantToRead(book)}
                                     removeFromRead={(book) => this.removeFromRead(book)}/>
                <ListReadBooks readBooks={this.props.read}/>

                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;