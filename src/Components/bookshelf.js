import React from 'react';

import Book from './book';
import { render } from 'react-dom';

// const BookShelf = ({ title = 'Currently Reading', books = [] }) => {
class BookShelf extends React.Component {
  state = {
    shouldRender: false,
  };
  handleShelfChange = () => {
    console.log(`Should probably change the shelf ¯\_(ツ)_/¯`);
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) this.setState({ shouldRender: true });
    return nextProps !== this.props;
  }

  render() {
    const { books, title } = this.props;
    console.log(title, ' Bookshelf Props: ', books);
    // if (books === null) books = [];
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <ol className="books-grid">
              {this.state.shouldRender &&
                books.map((book) => {
                  return (
                    <li key={book.id}>
                      <Book
                        handleBookShelfChange={this.handleShelfChange}
                        coverUrl={book.imageLinks.smallThumbnail}
                        title={book.title}
                        authors={book.authors}
                        currentShelf={book.shelf}
                      />
                    </li>
                  );
                })}
            </ol>
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
