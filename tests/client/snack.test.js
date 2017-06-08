import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import store from '../../client/store'
import App from '../../client/components/App'
import Header from '../../client/components/Header'
import Footer from '../../client/components/Footer'

App.prototype.componentDidMount = () => {}

test('The header renders on home page', t =>  {
  const wrapper = shallow(<Header store={store}/>)
  t.is(wrapper.find('h1').text(),'NETFLIX AND CHOW')
})

test('The footer renders on home page', t =>  {
  const wrapper = shallow(<Footer store={store}/>)
  t.is(wrapper.find('h4').exists(), true)
})
