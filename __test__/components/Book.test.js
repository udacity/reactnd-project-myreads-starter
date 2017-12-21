import React from 'react'
import { mount } from 'enzyme';
import Book from '../../src/components/Book'
import '../../src/setupTests'

jest.mock('../../src/components/BookChanger', () => jest.fn(() => <div>BookChanger</div>))

describe('Book component', () => {

  test('should render', () => {
    const book = mount(<Book />)
    expect(book.props()).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      bookId: '123',
      title: 'livro',
      status: 'read',
      imagens: {},
      authors: ['test'],
      bookShelfUpdate: () => {}
    }

    const book = mount(
      <Book
        bookId={props.bookId}
        title={props.title}
        status={props.status}
        imagens={props.imagens}
        authors={props.authors}
        bookShelfUpdate={props.bookShelfUpdate}
      />
    )

    expect(book.props().bookId).toEqual(props.bookId)
    expect(book.props().title).toEqual(props.title)
    expect(book.props().status).toEqual(props.status)
    expect(book.props().imagens).toEqual(props.imagens)
    expect(book.props().authors).toEqual(props.authors)
    expect(book.props().bookShelfUpdate).toEqual(props.bookShelfUpdate)
  })
})


