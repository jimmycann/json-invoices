const Promise = require('bluebird')
const path = require('path')

const Stock = require(path.join(global.APP_ROOT, './routes/models')).Stock

function fetchAll () {
  return new Promise((resolve, reject) => {
    Stock.run().then((stock) => {
      resolve(stock)
    }).catch((err) => {
      reject(err)
    })
  })
}

module.exports = {
  fetchAll: fetchAll
}
