var express = require('express')
var router = express.Router()

var snacksDB = require('../db/data')
var noRepeat = null

router.get('/', (req, res) => {
  let db = req.app.get('db')
  snacksDB.getSnacks(db)
    .then(snacks => {
      var randomSnack = noRepeat
      while (randomSnack == noRepeat) {
        randomSnack = Math.floor((Math.random()*snacks.length))
      }
      noRepeat = randomSnack
      res.json(snacks[randomSnack])
      // res.json(snacks)
    })
    .catch(err => {
      res.status(500).send('ERROR: ' + err.message)
    })
})



module.exports = router
