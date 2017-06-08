import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import App from '../../client/components/App'
// import Store from '../client/store'

App.prototype.componentDidMount = () => {}
