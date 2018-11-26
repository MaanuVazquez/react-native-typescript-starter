import {shallow, ShallowWrapper} from 'enzyme'
import React from 'react'
import 'react-native'
import App from '../'

describe('App', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render the component', async () => {
    expect(wrapper.exists()).toBe(true)
  })
})
