var mainRoutes = require('./main')

module.exports = (app, router) => {
  mainRoutes(router)
  app.use('/', router)
}
