exports.up = (knex, Promise) => {
  return knex.schema.createTable('books', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('image')
    table.string('status')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('books')
}
