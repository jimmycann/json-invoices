'use strict'

const Helpers = require('../helpers')

module.exports = (app) => {
  app.post('/api/v1/stock/fetch-all', (req, res) => {
    Helpers.fetchAll().then((stock) => {
      return res.status(200).send(stock)
    }).catch((err) => {
      return res.status(500).send(err)
    })
  })
}
