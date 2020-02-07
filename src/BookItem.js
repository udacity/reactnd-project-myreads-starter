import React, { Component } from 'react'


class BookItem extends React.Component {


  render() {
    let { key, book } = this.props
    console.log('lacra Books')
    console.log(book)

    return (

      <div >
        Hello from book item
        </div>
    )
  }
}

export default BookItem
