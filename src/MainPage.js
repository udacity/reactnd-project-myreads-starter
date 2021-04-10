import React from 'react';
import HomeShelves from './HomeShelves';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainPage = props => {
  const { books, move } = props;
  
  const shelfCategories  = [
    { title: 'Currently Reading', shelf: 'currentlyReading' },
    { title: 'Want To Read',      shelf: 'wantToRead' },    
    { title: 'Read',              shelf: 'read' }
  ];
  
  return (
    <div className="list-books">      
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>        
      <div className="list-books-content">
        <div>          
          {shelfCategories.map((shelf, index) => (
            <HomeShelves
              key={index}
              shelf={shelf}
              books={books.filter(book => book.shelf === shelf.shelf)}
              move={move}              
            />
          )           
          )}     
        </div>        
      </div>
      <div className="open-search">
        <Link className="open-search" to='/search'>Add a book</Link>
      </div>            
    </div>
  )    
};


//proptypes for books,move from app.js
MainPage.protoTypes = {
  books: PropTypes.array.isRequired,
  move: PropTypes.func.isRequired
};
export default MainPage;