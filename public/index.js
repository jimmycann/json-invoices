import './style/css/main.css'

import angular from 'angular'
import 'angular-ui-router'
import 'angular-sanitize'
import 'angular-animate'
import 'angular-file-upload'

if (ON_TEST) {
  require('angular-mocks/angular-mocks')
}

import registerConfig from './config'
import registerFilters from './components/filter'
import registerMain from './components/main'
import registerFileUpload from './components/file-upload'

angular.module('app', [
  'app.core',
  'app.main',
  'app.upload'
])

angular.module('app.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'angularFileUpload'
])

angular.module('app.main', [])
angular.module('app.upload', [])

registerConfig()
registerFilters()
registerMain()
registerFileUpload()
