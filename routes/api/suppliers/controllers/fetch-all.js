'use strict'

const Helpers = require('../helpers')

module.exports = (app) => {
  app.post('/api/v1/suppliers/fetch-all', (req, res) => {
    Helpers.fetchAll().then((suppliers) => {
      return res.status(200).send(suppliers)
    }).catch((err) => {
      return res.status(500).send(err)
    })
  })
}
