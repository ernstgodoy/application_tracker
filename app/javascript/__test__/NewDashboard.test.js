import React from "react"
import NewDash from "../components/Pages/dashboard/NewDash"
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApplicationMetrics from "../components/Pages/dashboard/application-metrics/ApplicationMetrics"
import Pie from "../components/Pages/dashboard/pie-chart/Pie"
import ApplicationTable from "../components/Pages/dashboard/application-table/ApplicationTable"

Enzyme.configure({adapter: new Adapter()})

describe('Dashboard', () => {
  let component, props;
  let something = { jobs: {hello: 'hi'}, statuses: {hello: 'hi'}, metrics: {hello: 'hi'} }
  global.fetch = jest.fn(() => Promise.resolve(something))
  beforeEach(() => {
    props = {
      csrf_token: 'token',
      current_user: {
        first_name: 'test',
        last_name: 'person',
        job_title: 'title'
      }
    }
    component = shallow(<NewDash {...props} />)
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