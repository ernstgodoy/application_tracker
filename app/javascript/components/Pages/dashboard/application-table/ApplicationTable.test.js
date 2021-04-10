import React from "react"
import ReactDOM from 'react-dom'
import ApplicationTable from "./ApplicationTable"
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Application Table', () => {
  it("renders", () => {
    const component = shallow(<ApplicationTable />)

    expect(component.exists()).toBe(true)
  })

})