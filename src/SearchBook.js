import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Book from './Book';

const terms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
function SearchBook(props) {
  // let location = useLocation();
  const { books, onShelfUpdate, query, onUpdateQuery, onLabelClick } = props;
  // useLocation can only be used to function not class
  // console.log(location.state);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/'>
          <button className="close-search">Close</button>
        </Link> 
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Enter New Item"
            value={query}
            onChange={(event) => onUpdateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
          {books.length === 0 ? (
            <div>
              <h2>Probably try terms:</h2>
              {terms.map((label) => (
                <button className="search-label" onClick={() => onLabelClick(label)}>
                  {label}
                </button>)
              )}
            </div>
            ) : (
            <ol className="books-grid">
              {Object.values(books).map((book)=>(
              <Book key={book.id} book={book} onShelfUpdate={props.onShelfUpdate} />
              ))}
            </ol>
          )}
      </div>
    </div>
  )
}
export default SearchBook