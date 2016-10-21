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

module.exports = (app) => {
  app.post('/api/v1/upload/invoice', upload.single('file'), (req, res) => {
    let json = []
    fs.createReadStream(req.file.path)
      .pipe(JSONStream.parse('*.products.*'))
      .pipe(through2.obj((chunk, enc, cb) => {
        console.log(chunk)
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
      res.status(204).end()
    })
  })
}
