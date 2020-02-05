import React from 'react'

class ShelfBooks extends React.Component {
    render() {
        const { bookList, allBooks } = this.props;
        console.log('my shelf book marker')
        console.log(bookList)

        return (
            <ol className="books-grid">
                bookList
            </ol>
            
        )
    }

}
export default ShelfBooks