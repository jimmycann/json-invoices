const fs = require('fs')
const JSONStream = require('JSONStream')
const through2 = require('through2')
const Promise = require('bluebird')
const async = require('async')
const path = require('path')

const Stock = require(path.join(global.APP_ROOT, './routes/models/Stock'))

function processNewInvoice (path) {
  return new Promise((resolve, reject) => {
    let json = []
    fs.createReadStream(path)
      .pipe(JSONStream.parse('*.products.*'))
      .pipe(through2.obj((chunk, enc, cb) => {
        Stock.get(chunk.product_id).run().then((stock) => {
          stock.units = stock.units + chunk.units
          stock.save().then((newStock) => {
            console.log(newStock)
            cb(null, chunk)
          })
        }).catch((err) => {
          if (err.name === 'DocumentNotFoundError') {
            Stock.save({
              product_id: chunk.product_id,
              product_name: chunk.product_name,
              cost_price: chunk.unit_price,
              sale_price: Math.round(chunk.unit_price * 1.5),
              units: chunk.units
            }).then((result) => {
              console.log(result)
              cb(null, chunk)
            })
          } else return reject(err)
        })
      }, () => {
        json.push('end')
        return resolve()
      }
    ))
  })
}

module.exports = {
  processNewInvoice: processNewInvoice
}
