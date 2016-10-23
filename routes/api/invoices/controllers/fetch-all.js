'use strict'

const Helpers = require('../helpers')

module.exports = (app) => {
  app.post('/api/v1/invoices/fetch-all', (req, res) => {
    Helpers.fetchAll().then((invoices) => {
      return res.status(200).send(invoices)
    }).catch((err) => {
      return res.status(500).send(err)
    })
  })
}
