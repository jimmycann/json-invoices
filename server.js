// Modules
const express = require('express')
const app = express()
const router = express.Router()
const Server = require('http').Server(app)
const r = require('rethinkdb')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const compression = require('compression')
const session = require('express-session')
const helmet = require('helmet')
const path = require('path')
global.APP_ROOT = __dirname

// Configuration ===========================================

const io = global.io = require('socket.io')(Server)
io.on('connection', () => {
  console.log('New client connected to socket')
})
io.listen(Server)

// Import API keys, port etc. that are unique to your application
require('./.config/.env')
// Set the port that will be used to access your application. Default is (localhost:)3000.
const port = process.env.PORT || 3000

// Basic security
app.use(helmet())
// Enable GZIP compression
app.use(compression())
// Allow crawlers to view your site (for SEO)
app.use(require('prerender-node'))

// Set session parameters
app.set('trust proxy', 1)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
// Allow console logging of server events
app.use(morgan('dev'))
// Get all data from POST parameters
app.use(bodyParser.urlencoded({ extended: true }))
// Parse application/JSON
app.use(bodyParser.json())
// Override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))
// Set CORS parameters
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// Set the static file path for client facing code.
// Eg. '/public/img' will be '/img' for the client
app.use(express.static(path.join(__dirname, '/public')))

// Routes ================================================================
require('./routes/index.js')(app, router)

// Initialize the app ===============================================
app.listen(port)
// Log successful start of your app
console.log('Now available at localhost:' + port)
// Expose the app
exports = module.exports = app
