import request from 'superagent'

export const receiveSnack = (snack) => {
  return {
    type: 'RECEIVE_SNACK',
    snack
  }
}

export const addNewSnack = (snack) => {
  return {
    type: 'ADD_NEW_SNACK',
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

export function addSnack(snack) {
  return (dispatch) => {
    console.log({snack});
    request
      .post(`/api/snacks`)
      .send(snack)
      .end((err, res) => {
        console.log("the response", res.body);
        if (err) {
          console.error(err.message)
          return
        }
        snack.id = res.body
        dispatch(addNewSnack(snack))
      })
  }
}
