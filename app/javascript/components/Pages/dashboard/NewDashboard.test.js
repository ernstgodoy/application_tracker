import React from "react"
import NewDash from "./NewDash"
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApplicationMetrics from "./application-metrics/ApplicationMetrics"
import Pie from "./pie-chart/Pie"
import ApplicationTable from "./application-table/ApplicationTable"

Enzyme.configure({adapter: new Adapter()})

describe('Dashboard', () => {
  let component;
  let something = { jobs: {hello: 'hi'}, statuses: {hello: 'hi'}, metrics: {hello: 'hi'} }
  global.fetch = jest.fn(() => Promise.resolve(something))

  beforeEach(() => {
    component = shallow(<NewDash />)
  })
  
  it("renders", () => {
    expect(component.exists()).toBe(true)
  })

  it("calls componentDidMount", () => {
    const instance = component.instance()
    jest.spyOn(instance, 'getData')
    instance.componentDidMount()
    expect(instance.getData).toHaveBeenCalledTimes(1)
  })

  it("has 3 children", () => {
    const children = [ApplicationMetrics, Pie, ApplicationTable]
    expect(component.containsAllMatchingElements(children)).toEqual(true)
  })
  
  it('has h5 tag', () => {
    let subHeader = component.find('h5')
    expect(subHeader).toBeTruthy()
    expect(subHeader.length).toEqual(3)
  })
})