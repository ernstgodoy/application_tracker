import React from "react"
import ApplicationTable from "./ApplicationTable"
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Application Table', () => {

  it("renders", () => {
    const component = shallow(<ApplicationTable />)
    expect(component.exists()).toEqual(true)
  })

  it('should create a row per application', () => {
    const props = {
      data: [
        {
          id: 1,
          user_id: 1,
          company: "company",
          role: "Frontend Engineer",
          status: "Just Applied",
          date_applied: "2021-04-15",
          last_follow_up: "2021-04-15"
        },
        {
          id: 2,
          user_id: 1,
          company: "company",
          role: "Software Engineer",
          status: "Just Applied",
          date_applied: "2021-04-15",
          last_follow_up: "2021-04-15"
        }
      ]
    }
    const component = mount(<ApplicationTable {...props} />)
    const table = component.find('#table-test')
    const row = table.find('#table-row-test')
    const th = component.find('th')
    const noData = component.find('.no-data')

    expect(th.length).toEqual(6)
    expect(row.length).toEqual(2)
    expect(noData.exists()).toEqual(false)
  })

  it('edit button and delete button redirects', () => {
    global.window = { location: { pathname: null }}
    const props = {
      data: [
        {
          id: 1,
          user_id: 1,
          company: "company",
          role: "Frontend Engineer",
          status: "Just Applied",
          date_applied: "2021-04-15",
          last_follow_up: "2021-04-15"
        }
      ]
    }
    const component = mount(<ApplicationTable {...props} />)
    const row = component.find('#table-row-test')
    const edit = component.find('#edit-button-test').hostNodes()
    const del = row.find('#delete-button-test').hostNodes()

    expect(row.length).toEqual(1)
    expect(edit.exists()).toEqual(true)
    expect(edit.getDOMNode().getAttribute('href')).toEqual('/edit-application/1')
    expect(del.exists()).toEqual(true)
    expect(del.getDOMNode().getAttribute('href')).toEqual('/delete-application/1')
  })

  it('should display no applications to track', () => {
    const props = {
      data: []
    }
    const component = mount(<ApplicationTable {...props} />)
    const noData = component.find('.no-data')
    const table = component.find('#table-test')
    const row = table.find('#table-row-test')

    expect(row.length).toEqual(0)
    expect(noData.exists()).toEqual(true)
  })
})