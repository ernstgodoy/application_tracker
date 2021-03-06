import React from "react"
import ApplicationMetrics from "../components/Pages/dashboard/application-metrics/ApplicationMetrics"
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Application Metrics', () => {

  it("renders", () => {
    const props = {
      data: {
        total: 0,
        statuses: { }
      }
    }
    const component = shallow(<ApplicationMetrics {...props} />)

    expect(component.exists()).toEqual(true)
  })

  it('should make a list', () => {
    const props = {
      data: {
        total: 2,
        statuses: {
          phase_1: 1,
          phase_2: 2,
        }
      }
    }
    const component = shallow(<ApplicationMetrics {...props} />)
    const ul = component.find('ul')
    const li = component.find('li')
    const status = component.find('#status-test')

    expect(ul.length).toEqual(1)
    expect(li.length).toEqual(3)
    expect(status.length).toEqual(2)
  })

  it('should not make a list on empty statuses object', () => {
    const props = {
      data: {
        total: 0,
        statuses: { }
      }
    }
    const component = shallow(<ApplicationMetrics {...props} />)
    const ul = component.find('ul')
    const li = component.find('li')
    const status = component.find('#status-test')

    expect(ul.length).toEqual(1)
    expect(li.length).toEqual(1)
    expect(status.length).toEqual(0)
  })
})