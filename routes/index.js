'use strict'

const root = require('./root')
const upload = require('./upload')

module.exports = (app, router) => {
  root(router)
  upload(app)
  app.use('/', router)
}
