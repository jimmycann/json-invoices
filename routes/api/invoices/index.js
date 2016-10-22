'use strict'

const insert = require('./controllers/insert')

module.exports = (app) => {
  insert(app)
}
