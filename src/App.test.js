import React from "react"
import App, {updateBooks, pushBook} from "./App"
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"
/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
 **/
Enzyme.configure({ adapter: new Adapter() })
const fetchMock = require('fetch-mock')
fetchMock.get('*', {});
// it('renders without crashing', () => {
//     expect(shallow(<App />)).toMatchSnapshot()
// })

it('updateResults update the results array if book.shelf in', () => {
    var results = [{id: 1, shelf:"wantToRead"}]
    const book = {id: 1, shelf:"currentRead"}

    results = updateBooks(results, book)
    expect(results[0].shelf).toBe("currentRead");

})

it('pushBook check if book is in current array given and push it to the array if not in', () => {
    var books = [{id: 1}]
    const book = {id: 2, shelf:"currentRead"}
    const results = pushBook(books, book)
    expect(results[1].id).toBe(2);

})