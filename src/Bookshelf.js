import React from 'react';
import Book from './Book';
import { update } from './BooksAPI';

class Bookshelf extends React.Component {



  // async onOptionChange (book, value) {
  //   console.log(book)
  //   console.log(value)
  //   update(book, value);
  //   this.setState({
  //     shelf: value
  //   });
  // }

  render() {
    const {bookshelfTitle, books} = this.props;

    console.log(bookshelfTitle);
    console.log(books);

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books && books.length > 0 && books.map( book => {
                console.log("ahhhhhhhhh")
                console.log(books)
                
                return (
                  <li key={`${book.title}_${book.id}`}>
                    <Book 
                      book={book}
                      onOptionChange={(book, value) => this.props.onOptionChange(book, value)}
                    /> 
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
};

export default Bookshelf;