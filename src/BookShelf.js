import React, { Component } from 'react'

class BookShelf extends Component{

    render() {
        const shelf = this.props.shelf
        return(
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                </div>
            </div>
        )
    }
}

export default BookShelf
