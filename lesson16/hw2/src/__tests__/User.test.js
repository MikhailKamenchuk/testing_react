import React from 'react';
import { shallow } from 'enzyme';
import User from '../User'

describe("User", () => {
  it("should correct render name from props to component", () => {
    const wrapper = shallow(<User name='John' />)
    expect(wrapper.find('.user__name').text()).toEqual('John')
  })
  it("should correct render age from props to component", () => {
    const wrapper = shallow(<User age="19" />)
    expect(wrapper.find('.user__age').text()).toEqual('19')
  })
})