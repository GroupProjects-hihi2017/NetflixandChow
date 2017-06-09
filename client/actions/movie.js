import request from 'superagent'

export const receiveMovie = (movie) => {
  return {
    type: 'RECEIVE_MOVIE',
    movie
  }
}



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
