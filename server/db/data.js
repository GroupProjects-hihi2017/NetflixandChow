const getSnacks = (db) => {
  return db('snacks')
    .select('*')
}

const addSnack = (snack, db) => {
  return db('snacks').insert(snack)
}

module.exports = {
  getSnacks,
  addSnack
}
