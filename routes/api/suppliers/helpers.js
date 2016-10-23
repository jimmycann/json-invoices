const Promise = require('bluebird')
const path = require('path')

const Suppliers = require(path.join(global.APP_ROOT, './routes/models')).Suppliers

function fetchAll () {
  return new Promise((resolve, reject) => {
    Suppliers.run().then((stock) => {
      resolve(stock)
    }).catch((err) => {
      reject(err)
    })
  })
}

module.exports = {
  fetchAll: fetchAll
}
