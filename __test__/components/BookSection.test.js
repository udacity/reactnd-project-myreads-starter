import React from 'react'
import { mount } from 'enzyme';
import BookSection from '../../src/components/BookSection'
import '../../src/setupTests'

jest.mock('../../src/components/Book', ()=> jest.fn())

describe('BookSection component', () => {

  test('should render', () => {
    const bookSection = mount(<BookSection />)
    expect(bookSection.props()).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      title: 'livro',
      books: [],
      bookShelfUpdate: () => {}
    }

    const bookChanger = mount(
      <BookSection
        title={props.title}
        books={props.books}
        bookShelfUpdate={props.bookShelfUpdate}
      />
    )

    expect(bookChanger.props().title).toEqual(props.title)
    expect(bookChanger.props().books).toEqual(props.books)
    expect(bookChanger.props().bookShelfUpdate).toEqual(props.bookShelfUpdate)
  })
})


