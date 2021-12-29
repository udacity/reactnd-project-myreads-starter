import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import PageLayout from './PageLayout'


class BooksPage extends Component {
  render() {
    return (
      <PageLayout>
        <div><div className='list-books-content'>
          <div>
            <BookShelf
              title='Currently Reading'
              bookList={this.props.reading}
              updadeShelf={this.props.updadeShelf}
            />
            <BookShelf
              title='Want to Read'
              bookList={this.props.wantRead}
              updadeShelf={this.props.updadeShelf}
            />
            <BookShelf
              title='Read'
              bookList={this.props.read}
              updadeShelf={this.props.updadeShelf}
            />
          </div>
        </div>
          <div className='open-search'>
            <Link to='/search'><button>Add a book</button></Link>
          </div></div>
      </PageLayout>
    )
  }
}

export default BooksPage
