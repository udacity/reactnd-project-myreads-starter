import React from 'react'
import { mount } from 'enzyme'
import { Route, BrowserRouter} from 'react-router-dom'
import ListOfBooks from '../../src/components/ListOfBooks'
import '../../src/setupTests'

jest.mock('../../src/components/BookSection', ()=> jest.fn(() => <div>BookSection</div>))

describe('ListOfBooks component', () => {

  test('should render', () => {
    const getAll = () => Promise.resolve()
    const listOfBooks = mount(
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => <ListOfBooks getAll={getAll} />}
        />
      </BrowserRouter>
      )
    expect(listOfBooks).toBeTruthy()
  })
})


