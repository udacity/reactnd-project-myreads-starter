import React from 'react';
import BooksGrid from './BooksGrid';

const books = [
  {
      "title": "The Philosophy Book",
      "authors": "DK",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=yoOKBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "yoOKBgAAQBAJ"
  },
  {
      "title": "The Philosophy Book",
      "authors": "DK",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=CFe9elSJ_EsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "CFe9elSJ_EsC"
  },
  {
      "title": "The Philosophy Book",
      "authors": "DK",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=2nyKBgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api\")"
      },
      "id": "2nyKBgAAQBAJ"
  },
  {
      "title": "What is Philosophy?",
      "authors": "Gilles Deleuze, Félix Guattari",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=gwVF7FpvsU8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "gwVF7FpvsU8C"
  },
  {
      "title": "History of Western Philosophy",
      "authors": "Bertrand Russell",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=iQZ6Xk9VdtAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "iQZ6Xk9VdtAC"
  },
  {
      "title": "Philosophy in the Flesh",
      "authors": "George Lakoff, Mark Johnson",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=KbqxnX3_uc0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "KbqxnX3_uc0C"
  },
  {
      "title": "Philosophy and Computer Science",
      "authors": "Timothy R. Colburn",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=luF4ElMxqg4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "luF4ElMxqg4C"
  },
  {
      "title": "Fashion",
      "authors": "Lars Svendsen",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=hbc52wlkFXcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "hbc52wlkFXcC"
  },
  {
      "title": "God and Philosophy",
      "authors": "Etienne Gilson",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=m_Pq5GZoP3cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "m_Pq5GZoP3cC"
  },
  {
      "title": "The Philosophy of Science",
      "authors": "Sahotra Sarkar, Jessica Pfeifer",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=od68ge7aF6wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "od68ge7aF6wC"
  },
  {
      "title": "Dr. Seuss and Philosophy",
      "authors": "Jacob M. Held",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=P3eWcgm_BDkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "P3eWcgm_BDkC"
  },
  {
      "title": "An EPZ Introduction to Philosophy",
      "authors": "Jacques Maritain",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=PzUnH4Z0APsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "PzUnH4Z0APsC"
  },
  {
      "title": "Death and Philosophy",
      "authors": "J. E. Malpas, Jeff Malpas, Robert C. Solomon",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=PYVwoEnnBisC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "PYVwoEnnBisC"
  },
  {
      "title": "Philosophy",
      "authors": "Ayn Rand",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=pUQNrL79WrkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "pUQNrL79WrkC"
  },
  {
      "title": "101 Key Terms in Philosophy and Their Importance for Theology",
      "authors": "Kelly James Clark, Richard Lints, James K. A. Smith",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=H81iiiPtuGsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "H81iiiPtuGsC"
  },
  {
      "title": "A Summary of Philosophy",
      "authors": "Saint Thomas Aquinas, Richard J. Regan",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=cf_qOX_QTYIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "cf_qOX_QTYIC"
  },
  {
      "title": "Philosophy for Beginners",
      "authors": "Richard Osborne, Ralph Edney",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=_hIWb6Z8mX0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "_hIWb6Z8mX0C"
  },
  {
      "title": "History of Philosophy",
      "authors": "William Turner",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=1Q0vAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "1Q0vAAAAYAAJ"
  },
  {
      "title": "Philosophy of Mathematics",
      "authors": "Paul Benacerraf, Hilary Putnam",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=JjQrpYswtYEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "JjQrpYswtYEC"
  },
  {
      "title": "A Philosophy of Evil",
      "authors": "Lars Fr. H. Svendsen, Kerri A. Pierce",
      "cover": {
          "width": 128,
          "height": 192,
          "backgroundImage": "url(\"http://books.google.com/books/content?id=DIZEXVhLF30C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
      },
      "id": "DIZEXVhLF30C"
  }
];

const SearchPage = (props) => {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={props.toListBooks}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"/>
  
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={books} />
        </div>
      </div>
    );
  };

export default SearchPage;