var express = require('express')
const request = require('superagent')

var router = express.Router()

var NetflixRoulette = require('netflix-roulette')

var actors = ['Brad Pitt', 'Leonardo Dicaprio', 'Anne Hathaway', 'Jennifer Lawrence', 'Jamie Foxx', 'Ryan Gosling', 'Meryl Streep', 'Emma Stone', 'Helen Mirren', 'Emma Watson', 'Halle Berry', 'Kerry Washington']

router.get('/', (req, res) => {
  // db.getActors()
  //   .then(actors => {
  //
  //   })
  NetflixRoulette.actor(randomActor(actors), (error, data) => {
    let random = Math.round(Math.random() * data.length)
    console.log({data: data.length, random});
    res.send(data[random])
  })

  // request
  // .get(NetflixRoulette.title('Tucker & Dale vs. Evil', callbackFunc(error, data), 2010))
  // .end((err, result) => {
  //   if (err) {
  //     res.status(500).send(err.message)
  //   } else {
  //     res.json(result.body.data.children)
  //   }
  // })
})

function randomActor(actors) {
  let random = Math.round(Math.random() * actors.length)
  console.log(actors[random]);
  return actors[random]
}

module.exports = router
