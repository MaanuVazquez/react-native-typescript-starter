import {shallow, ShallowWrapper} from 'enzyme'
import React from 'react'
import 'react-native'
import StyledText from '../'

describe('Styled Text', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<StyledText />)
  })

  it('should render StyledText component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
