import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import store from '../../client/store'
import App from '../../client/components/App'
import Movie from '../../client/components/Movie'

App.prototype.componentDidMount = () => {}

test('Netflix component renders a movie/show', t => {
  const wrapper = mount(<Movie store={store} />)
  t.is(wrapper.find('.movie-title').exists(), true)
})

test('Netflix component renders a movie/show', t => {
  const wrapper = mount(<Movie store={store} />)
  t.is(wrapper.find('.movie-director').exists(), true)
})

test('Netflix component renders a movie/show', t => {
  const wrapper = mount(<Movie store={store} />)
  t.is(wrapper.find('.movie-summary').exists(), true)
})
