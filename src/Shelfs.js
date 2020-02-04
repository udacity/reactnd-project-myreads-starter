import React from 'react'
import ShelfBooks from './ShelfBooks'

class Shelfs extends React.Component {
    render() {
        const { shelfKey, shelfNames } = this.props;
        console.log('my shelf =>' + shelfKey)
        return (
            <div className=' bookshelf'>
                <h2 className='bookshelf-title' > {shelfNames}</h2>
                <div>
                    <ShelfBooks

                    />
                </div>

            </div>
        )

    }

}

export default Shelfs