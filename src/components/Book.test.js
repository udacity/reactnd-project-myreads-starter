import React from "react"
import Book from "./Book"
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const onMoveBook = jest.fn()
    const book = {imageLinks:  { smallThumbnail: "test"} }
    expect(shallow(<Book book={book} onMoveBook={onMoveBook}/>)).toMatchSnapshot()
})


it('When select change onMoveBook is called', () => {
    const onMoveBook = jest.fn()
    const book = {imageLinks:  { smallThumbnail: "test"} }
    const test = mount(
        <Book
            book={book}
            onMoveBook={onMoveBook}
        />)
    test.find('select').simulate('change', { target: { value: 'wantToRead' } });
    expect(onMoveBook).toHaveBeenCalled();

})


