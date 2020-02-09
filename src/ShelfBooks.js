import React from 'react'
import BookItem from './BookItem'


class ShelfBooks extends React.Component {
    render() {
        const { bookList,changeSelf, shelfKey, allBooks } = this.props;
        let bookItem = bookList.map( book => {

            return(
                <BookItem  
                key={book.id}
                book={book}
                changeSelf={changeSelf}
                shelfKey={shelfKey}
                allBooks = {allBooks}
                />
            )
        })

        

        return (
            <ol className="books-grid">
                {bookItem}
            </ol>

        )
    }

}
export default ShelfBooks