import React from 'react'
import { mount } from 'enzyme';
import BookChanger from '../../src/components/BookChanger'
import '../../src/setupTests'
import { update } from '../../src/BooksAPI';

jest.mock('../../src/BooksAPI', ()=> jest.fn())

describe('BookChanger component', () => {

  test('should render', () => {
    const bookChanger = mount(<BookChanger />)
    expect(bookChanger.props()).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      bookId: '123',
      status: 'read',
      bookShelfUpdate: () => {}
    }

    const bookChanger = mount(
      <BookChanger
        bookId={props.bookId}
        status={props.status}
        bookShelfUpdate={props.bookShelfUpdate}
      />
    )

    expect(bookChanger.props().bookId).toEqual(props.bookId)
    expect(bookChanger.props().status).toEqual(props.status)
    expect(bookChanger.props().bookShelfUpdate).toEqual(props.bookShelfUpdate)
  })
})


