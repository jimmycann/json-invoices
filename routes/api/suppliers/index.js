'use strict'

const fetchAll = require('./controllers/fetch-all')
const findOne = require('./controllers/find-one')

module.exports = (app) => {
  fetchAll(app)
  findOne(app)
}
