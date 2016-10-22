'use strict'

const fs = require('fs')
const JSONStream = require('JSONStream')
const through2 = require('through2')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(global.APP_ROOT, '/.tmp'))
  },
  filename: (req, file, cb) => {
    let fnSplit = [
      file.originalname.substring(0, file.originalname.lastIndexOf('.')),
      file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)
    ]
    cb(null, fnSplit[0] + '-' + ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4) + fnSplit[1])
  }
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/json') {
      req.fileValidationError = 'wrong mimetype'
      return cb(null, false, new Error('wrong mimetype'))
    }
    cb(null, true)
  }
})
const Stock = require(path.join(global.APP_ROOT, './routes/models/Stock'))

module.exports = (app) => {
  app.post('/api/v1/invoice/insert', upload.single('file'), (req, res) => {
    let json = []
    fs.createReadStream(req.file.path)
      .pipe(JSONStream.parse('*.products.*'))
      .pipe(through2.obj((chunk, enc, cb) => {
        Stock.get(chunk.product_id).run().then((stock) => {
          stock.units = stock.units + chunk.units
          stock.save().then((newStock) => {
            console.log(newStock)
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
            })
          } else return res.status(500).send(err)
        })
        cb(null, chunk)
      }, (cb) => {
        json.push('end')
        cb()
      }
    ))
    .on('data', () => {
      console.log('data')
    })
    .on('end', () => {
      console.log(json)
      return res.status(204).end()
    })
  })
}
