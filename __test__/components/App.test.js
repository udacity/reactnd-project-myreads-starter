import React from 'react'
import { shallow } from 'enzyme';
import App from '../../src/components/App'
import '../../src/setupTests'

jest.mock('../../src/components/AddBook', () => jest.fn(() => <div>AddBook</div>))
jest.mock('../../src/components/ListOfBooks', () => jest.fn(() => <div>ListOfBooks</div>))
jest.mock('../../src/BooksAPI', () => jest.fn(() => {}))

describe('App component', () => {

  test('should render', () => {
    const app = shallow(<App />)
    expect(app).toBeTruthy()
  })
})


