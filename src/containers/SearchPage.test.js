import React from "react"
import SearchPage from "./SearchPage"
import * as Enzyme from "enzyme"
import {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-15"

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const onMoveBook = jest.fn()
    const searchBooks = jest.fn()
    expect(shallow(<SearchPage
        results={[{shelf:'wantToRead'}]}
        searchBooks={searchBooks}
        onMoveBook={onMoveBook}
    />)).toMatchSnapshot()
})

