
var test = require('ava')
var request = require('supertest')

var app = require('../../../server/server.js')

var configureDatabase = require('../helpers/database-config')

configureDatabase(test, app)

// Could have these tests inside one block of code
// eg

// test.cb('GET /movie', t => {
//   request(t.context.app)
//     .get('/api/movie')
//     .expect(200)
//     .end((err,res) => {
//       t.deepEqual(Object.keys(res.body).length, 12)
//       t.deepEqual(Object.keys(res.body).show_title)
//       t.deepEqual(Object.keys(res.body).show_id)
//       t.deepEqual(Object.keys(res.body).show_cast)
//       t.end()
//     })
// })

test.cb('GET /movie', t => {
  request(t.context.app)
    .get('/api/movie')
    .expect(200)
    .end((err,res) => {
      t.deepEqual(Object.keys(res.body).length, 12)
      t.end()
    })
})

test.cb('Get/movie', t => {
  request(t.context.app)
  .get('/api/movie')
  .expect(200)
  .end((err,res) => {
    t.deepEqual(Object.keys(res.body).show_title)
    t.end()
  })
})

test.cb('Get/movie', t => {
  request(t.context.app)
  .get('/api/movie')
  .expect(200)
  .end((err,res) => {
    t.deepEqual(Object.keys(res.body).show_id)
    t.end()
  })
})

test.cb('Get/movie', t => {
  request(t.context.app)
  .get('/api/movie')
  .expect(200)
  .end((err,res) => {
    t.deepEqual(Object.keys(res.body).show_cast)
    t.end()
  })
})
