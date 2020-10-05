import React from 'react';
import { shallow } from 'enzyme';
import Mailbox from '../Mailbox'

describe("Mailbox", () => {
  it("should not render component if passed no unresd messages", () => {
    const wrapper = shallow(<Mailbox unreadMessages={[]} />)
    expect(wrapper.find('.mailbox__count').exists()).toEqual(false)
  })
  it("should correct count render to component if passed unresd messages", () => {
    const wrapper = shallow(<Mailbox unreadMessages={[1, 2, 3]} />)
    expect(wrapper.find('.mailbox__count').text()).toEqual('3')
  })
})