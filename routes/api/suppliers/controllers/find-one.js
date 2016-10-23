'use strict'

const Helpers = require('../helpers')

module.exports = (app) => {
  app.post('/api/v1/suppliers/find-one', (req, res) => {
    Helpers.findOne(req.body.id).then((supplier) => {
      return res.status(200).send(supplier)
    }).catch((err) => {
      return res.status(500).send(err)
    })
  })
}
