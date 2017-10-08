import React from "react"
import Bookshelf from "./Bookshelf"
import * as Enzyme from "enzyme"
import {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-15"

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const onMoveBook = jest.fn()
    const shelfName = "Want to read"
    expect(shallow(<Bookshelf
        shelfName={shelfName}
        books={[]}
        onMoveBook={onMoveBook}
    />)).toMatchSnapshot()
})


it('renders Book component when book array has books', () => {
    const onMoveBook = jest.fn()
    const shelfName = "Want to read"
    const bookShelf = (shallow(<Bookshelf
        shelfName={shelfName}
        books={[{id:'1'}]}
        onMoveBook={onMoveBook}
    />))
    expect(bookShelf.find('Book').length).toBe(1)

})


