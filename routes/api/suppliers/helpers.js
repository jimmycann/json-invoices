const Promise = require('bluebird')
const path = require('path')

const Suppliers = require(path.join(global.APP_ROOT, './routes/models')).Suppliers

function fetchAll () {
  return new Promise((resolve, reject) => {
    Suppliers.run().then((suppliers) => {
      resolve(suppliers)
    }).catch((err) => {
      reject(err)
    })
  })
}

function findOne (id) {
  return new Promise((resolve, reject) => {
    Suppliers.get(id).run().then((supplier) => {
      resolve(supplier)
    }).catch((err) => {
      reject(err)
    })
  })
}

module.exports = {
  fetchAll: fetchAll,
  findOne: findOne
}
