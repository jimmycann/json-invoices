const path = require('path')
const db = require(path.join(global.APP_ROOT, './.config/.db'))
const thinky = require('thinky')(db.rethinkdb)
const type = thinky.type
const Invoices = thinky.createModel('Invoices', {
  invoice_number: type.string().required(),
  supplier_id: type.number().required(),
  supplier_name: type.string().required(),
  products: type.array().required()
}, {
  pk: 'invoice_number'
})

module.exports = Invoices
