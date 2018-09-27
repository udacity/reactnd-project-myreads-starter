import React from 'react';
import Shelf from './shelf.js'

const bookshelf = (props) => (
    <div className="list-books-content">
      <div>
        <Shelf name={"Currently Reading"}/>
        <Shelf name={"Want to Read"}/>
        <Shelf name={"Read"}/>
      </div>
    </div>
  )

  export default bookshelf;
