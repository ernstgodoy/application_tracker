import React from "react"
import NewDash from "./NewDash"
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApplicationMetrics from "./application-metrics/ApplicationMetrics"
import Pie from "./pie-chart/Pie"
import ApplicationTable from "./application-table/ApplicationTable"

Enzyme.configure({adapter: new Adapter()})

describe('Dashboard', () => {
  
  it("renders", () => {
    const component = shallow(<NewDash />)
    expect(component.exists()).toBe(true)
  })

  it("has 3 children", () => {
    const component = mount(<NewDash />)
    const children = [ApplicationMetrics, Pie, ApplicationTable]
    expect(component.containsAllMatchingElements(children)).toEqual(true)

  })
  
  it('has h5 tag', () => {
    const component = shallow(<NewDash />)
    let subHeader = component.find('h5')
    expect(subHeader).toBeTruthy()
    expect(subHeader.length).toEqual(3)
  })
})