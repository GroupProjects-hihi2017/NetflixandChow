
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('snacks', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('snacks')
};
