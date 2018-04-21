import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import App from './App'

import * as BooksAPI from './BooksAPI'


/**
  * Mocking API requests
  */
jest.mock('./BooksAPI', () => {
  //sample list of books
  const books = [
    {"title":"The Linux Command Line","authors":["William E. Shotts, Jr."],"publisher":"No Starch Press"},
    {"title":"Learning Web Development with React and Bootstrap","authors":["Harmeet Singh","Mehul Bhatt"]},
    {"title":"The Cuckoo's Calling","authors":["Robert Galbraith"],"publisher":"Mulholland Books"},{"title":"Lords of Finance","authors":["Liaquat Ahamed"],"publisher":"Penguin"},{"title":"Needful Things","authors":["Stephen King"],"publisher":"Simon and Schuster"},{"title":"React","authors":["Nils Hartmann","Oliver Zeigermann"],"publisher":"dpunkt.verlag"},{"title":"Satire TV","authors":["Jonathan Gray","Jeffrey P. Jones","Ethan Thompson"],"publisher":"NYU Press"}
  ]

  return {
    getAll: jest.fn(() => Promise.resolve(books)),
  };
});


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('gets list of Books on DidMount stage of lifecycle and stores on state', () => {
  const app = shallow(<App />);
  app.instance().componentDidMount();
  expect(BooksAPI.getAll).toHaveBeenCalled();
})
