const path = require('path')

module.exports = (router) => {
  // Set our main route - All traffic set to receive /public/index.html
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })
}
