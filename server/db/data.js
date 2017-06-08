const getSnacks = (db) => {
  return db('snacks')
    .select('*')
}

module.exports = {
  getSnacks
}
