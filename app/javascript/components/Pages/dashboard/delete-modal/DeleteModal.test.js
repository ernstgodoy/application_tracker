import React from "react"
import DeleteModal from "./DeleteModal"
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Delete Modal Component', () => {
  let component, props;

  beforeEach(() => {
    props = {
      tempId: undefined,
      token: 'token',
      onDelete: jest.fn(),
      closeModal: jest.fn(),
      show: true,
    }
    component = shallow(<DeleteModal {...props} />)
  })

  it("renders", () => {
    expect(component.exists()).toEqual(true)
  })

  it ("should show message when modal opens", () => {
    const p = component.find("p")

    expect(p.length).toEqual(1)
    expect(p.text()).toEqual("Are you sure you want to delete?")
  })

})