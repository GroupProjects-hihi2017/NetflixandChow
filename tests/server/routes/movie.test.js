
var test = require('ava')
var request = require('supertest')

var app = require('../../../server/server.js')

var configureDatabase = require('../helpers/database-config')

configureDatabase(test, app)

test.cb('GET /movie', t => {
  request(t.context.app)
    .get('/api/movie')
    .expect(200)
    .end((err,res) => {
      t.deepEqual(Object.keys(res.body).length, 12)
      t.end()
    })
})
