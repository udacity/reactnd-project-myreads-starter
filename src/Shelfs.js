import React from 'react'
import ShelfBooks from './ShelfBooks'

class Shelfs extends React.Component {
    render() {
        const { shelfKey, shelfNames, bookList, allBooks, changeSelf } = this.props;
        return (
            <div className=' bookshelf'>
                <h2 className='bookshelf-title' > {shelfNames}</h2>
                <div className="bookshelf-books">
                    <ShelfBooks bookList={bookList}
                        allBooks={allBooks}
                        changeSelf={changeSelf}
                        shelfKey={shelfKey}

                    />
                </div>

            </div>
        )

    }

}

export default Shelfs