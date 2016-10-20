'use strict'

const invoices = require('./controllers/invoices')

module.exports = (app) => {
  invoices(app)
}
