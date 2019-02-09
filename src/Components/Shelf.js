import React, {Component} from 'react'

class Shelf extends Component{
    render(){
        let {bookShelfName} = this.props
        return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfName}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {this.props.children}
            </ol>
        </div>
    </div>)
    }
}

export default Shelf