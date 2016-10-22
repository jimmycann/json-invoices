const path = require('path')
const db = require(path.join(global.APP_ROOT, './.config/.db'))
const thinky = require('thinky')(db.rethinkdb)
const type = thinky.type
const Suppliers = thinky.createModel('Suppliers', {
  supplier_id: type.number().required(),
  supplier_name: type.string().required()
}, {
  pk: 'supplier_id'
})

Suppliers.changes().then((feed) => {
  feed.each((error, doc) => {
    if (error) {
      console.log(error)
      process.exit(1)
    }
    console.log(doc)
  })
})

module.exports = Suppliers
