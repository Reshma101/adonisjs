'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title')
      table.string('body')
      table.timestamps(true)
      // alter table
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
