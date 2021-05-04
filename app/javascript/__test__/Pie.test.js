import React from "react"
import Pie from "../components/Pages/dashboard/pie-chart/Pie"
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Pie', () => {

  it("renders", () => {
    const props = {
      data: {}
    }
    const component = shallow(<Pie {...props} />)

    expect(component.exists()).toEqual(true)
  })
})