import test from 'ava'
import nock from 'nock'

import * as api from '../../client/actions/snack'


test.cb('Snack api receives snack', t => {
  let scope = nock('http://localhost:80')
    .get('/api/snacks')
    .reply(200, {message: "snack page is working"})

    api.getSnack()((actual) => {
      t.is(actual.snack.message, 'snack page is working')
      t.end()
    })
})
