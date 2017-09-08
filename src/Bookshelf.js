import React from 'react'
import ListBooks from './ListBooks'


class Bookshelf extends React.Component {
  render() {
    return (
      <div>
        <ListBooks 
        shelfName="Currently Reading" 
        availableBooks={this.props.books.filter((b) => b.shelf === 'currentlyReading')}
        update={this.props.update}
      />
      <ListBooks 
        shelfName="Want to Read" 
        availableBooks={this.props.books.filter((b) => b.shelf === 'wantToRead')}
        update={this.props.update}
      />
      <ListBooks 
        shelfName="Read" 
        availableBooks={this.props.books.filter((b) => b.shelf === 'read')}
        update={this.props.update}
      />
    </div>
  )
}
}
export default Bookshelf