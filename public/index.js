import './style/css/main.css'

import 'lodash'
import angular from 'angular'
import 'angular-ui-router'
import 'angular-sanitize'
import 'angular-animate'
import 'angular-file-upload'

if (ON_TEST) {
  require('angular-mocks/angular-mocks')
}

import registerConfig from './config'
import registerSocket from './components/socket'
import registerFilters from './components/filter'
import registerMain from './components/main'
import registerFileUpload from './components/file-upload'
import registerStock from './components/stock'

angular.module('app', [
  'app.core',
  'app.main',
  'app.socket',
  'app.upload',
  'app.stock'
])

angular.module('app.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'angularFileUpload'
])

angular.module('app.main', [])
angular.module('app.socket', [])
angular.module('app.upload', [])
angular.module('app.stock', [])

registerConfig()
registerSocket()
registerFilters()
registerMain()
registerFileUpload()
registerStock()
