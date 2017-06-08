import request from 'superagent'

export const receiveSnack = (snack) => {
  return {
    type: 'RECEIVE_SNACK',
    snack
  }
}

export function getSnack() {
  return (dispatch) => {
    request
      .get(`/api/snacks`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveSnack(res.body))
      })
  }
}
