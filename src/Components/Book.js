import React from "react";
import notAvailable from "../icons/noThumbnail.png";
import PropTypes from "prop-types";

class Book extends React.PureComponent {
  render() {
    const { book, updateBook } = this.props;
    let authors;
    if (book.authors) {
      authors = book.authors.map(author => {
        return (
          <div className="book-authors" key={author}>
            {author}
          </div>
        );
      });
    }
    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: book.imageLinks
                    ? `url(${book.imageLinks.smallThumbnail})`
                    : `url(${notAvailable})`
                }}
              />
              }
              <div className="book-shelf-changer">
                <select
                  value={book.shelf ? book.shelf : "none"}
                  onChange={e => updateBook(book, e.target.value)}
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            {authors}
          </div>
        </li>
      </div>
    );
  }
}
// const Book = ({ book, updateBook }) => {
//   let authors;

//   if (book.authors) {
//     authors = book.authors.map(author => {
//       return (
//         <div className="book-authors" key={author}>
//           {author}
//         </div>
//       );
//     });
//   }
//   return (
//     <div>
//       <li>
//         <div className="book">
//           <div className="book-top">
//             <div
//               className="book-cover"
//               style={{
//                 width: 128,
//                 height: 193,
//                 backgroundImage: book.imageLinks
//                   ? `url(${book.imageLinks.smallThumbnail})`
//                   : `url(${notAvailable})`
//               }}
//             />
//             }
//             <div className="book-shelf-changer">
//               <select
//                 defaultValue={book.shelf ? book.shelf : "none"}
//                 onChange={e => updateBook(book, e.target.value)}
//               >
//                 <option value="move" disabled>
//                   Move to...
//                 </option>
//                 <option value="currentlyReading">Currently Reading</option>
//                 <option value="wantToRead">Want to Read</option>
//                 <option value="read">Read</option>
//                 <option value="none">None</option>
//               </select>
//             </div>
//           </div>
//           <div className="book-title">{book.title}</div>
//           {authors}
//         </div>
//       </li>
//     </div>
//   );
// };

Book.propTypes = {
  book: PropTypes.object,
  updateBook: PropTypes.func
};
export default Book;
