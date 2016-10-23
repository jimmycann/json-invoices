'use strict'

const fetchAll = require('./controllers/fetch-all')

module.exports = (app) => {
  fetchAll(app)
}
