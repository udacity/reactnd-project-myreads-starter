import React from 'react';

class Bookshelf extends React.Component {
  render() {
    // props destrucuring
    const {bookshelfTitle, books} = this.props;

    return (
      <div>
        {/* FIRST BOOKSHELF INSTANCE */}
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">

              {/* MAP THROUGH LIST OF BOOKS, WHICH ARE PASSED VIA PROPS */}
              {books.map( book => {
                return (
                  <li key={book.title}>
                    {/* Below will become book component */}
                    <div className="book">
                      <div className="book-top">
                        {/* Not sure if book url below is working as expected.. */}
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.url})` }}></div>
                        {/* Below can probably be made its own component */}
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.author}</div>
                    </div>
                  </li>
                );
              })}
              
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookshelf;