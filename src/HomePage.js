import React, { Component } from 'react';
import BookShelf from './BookShelf';

class HomePage extends Component {
    state = {  }
    render() { 
        const {books} = this.props;
        return ( 
            <div className="list-books-content">
              <div>
                <BookShelf 
                    title = "Currently Reading"
                    books={books.filter(book => book["shelf"] === "currentlyReading"
                    )}
                />
                <BookShelf 
                    title = "Want To Read"
                    books={books.filter(book => book["shelf"] === "wantToRead"
                    )}
                />
                <BookShelf 
                    title = "Read"
                    books={books.filter(book => book["shelf"] === "read"
                    )}
                />
              </div>
            </div>

         );
    }
}
 
export default HomePage;