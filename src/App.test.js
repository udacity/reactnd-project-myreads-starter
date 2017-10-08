import React from "react"
import App from "./App"
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
it('renders without crashing', () => {
    expect(shallow(<App />)).toMatchSnapshot()
})


