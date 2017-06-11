import request from 'superagent'

export const receiveMovie = (movie) => {
  return {
    type: 'RECEIVE_MOVIE',
    movie
  }
}

//make your movie api here, unless there's an issue with netflix roulette api, you could just make your api call at client side.
// probably separate your randomizer logic with your client api and make it a function call.

export function getMovie (movie) {
  return (dispatch) => {
    request
      .get(`/api/movie`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveMovie(res.body))
      })
  }
}
