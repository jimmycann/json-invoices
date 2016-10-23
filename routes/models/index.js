'use strict'

const io = global.io

const Invoices = require('./Invoices')
const Stock = require('./Stock')
const Suppliers = require('./Suppliers')

Invoices.hasOne(Suppliers, 'supplier', 'supplier_id', 'supplier_id')

Invoices.changes().then((feed) => {
  feed.each((error, doc) => {
    if (error) {
      console.log(error)
      process.exit(1)
    }
    Suppliers.get(doc.supplier_id).run().then((supplier) => {
      doc.supplier = supplier
      io.sockets.emit('invoices', doc)
    })
  })
})

module.exports = {
  Invoices: Invoices,
  Stock: Stock,
  Suppliers: Suppliers
}
