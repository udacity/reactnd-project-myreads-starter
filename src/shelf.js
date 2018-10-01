import React from 'react';
import BookGrid from './bookgrid.js';

const shelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <BookGrid/>
    </div>
  </div>
  )

export default shelf;
