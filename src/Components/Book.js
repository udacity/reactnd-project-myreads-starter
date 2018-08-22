//* Book renders the book

import React from 'react';
import BookChanger from './BookChanger';

const Book = (props) => {
  return (
    <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>

      <BookChanger />

    </div>
    <div className="book-title">The Adventures of Tom Sawyer</div>
    <div className="book-authors">Mark Twain</div>
  </div>
  );
};

export default Book;