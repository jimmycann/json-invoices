'use strict'

const Invoices = require('./Invoices')
const Stock = require('./Stock')
const Suppliers = require('./Suppliers')

Invoices.hasOne(Suppliers, 'supplier', 'supplier_id', 'supplier_id')

module.exports = {
  Invoices: Invoices,
  Stock: Stock,
  Suppliers: Suppliers
}
