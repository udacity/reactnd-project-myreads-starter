import React, {Component} from 'react';
import BookGrid from './BookGrid';

class BookShelf extends Component {

    render(){
        let books = this.props.data;
        let title = this.props.title;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookGrid data={books} />
                </div>
            </div>
        );
    }
}

export default BookShelf;