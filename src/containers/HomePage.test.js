import React from "react"
import HomePage from "./HomePage"
import * as Enzyme from "enzyme"
import {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-15"

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const onMoveBook = jest.fn()
    expect(shallow(<HomePage
        books={[{shelf:'wantToRead'}]}
        onMoveBook={onMoveBook}
    />)).toMatchSnapshot()
})



