import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message'

describe("Message", () => {
  it("should not render component if passed no text", () => {
    const wrapper = shallow(<Message />)
    expect(wrapper.find('.message').exists()).toEqual(false)
  })
  it("should correct count render to component if passed unresd messages", () => {
    const wrapper = shallow(<Message text='Some text' />)
    expect(wrapper.find('.message').text()).toEqual('Some text')
  })
})