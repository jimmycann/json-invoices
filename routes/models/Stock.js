const path = require('path')
const db = require(path.join(global.APP_ROOT, './.config/.db'))
const thinky = require('thinky')(db.rethinkdb)
const type = thinky.type
const io = global.io
const Stock = thinky.createModel('Stock', {
  product_id: type.number().required(),
  product_name: type.string().required(),
  cost_price: type.number().min(0).required(),
  sale_price: type.number().min(0).required(),
  units: type.number().required()
}, {
  pk: 'product_id'
})

Stock.changes().then((feed) => {
  feed.each((error, doc) => {
    if (error) {
      console.log(error)
      process.exit(1)
    }
    io.sockets.emit('stock', doc)
  })
})

module.exports = Stock
