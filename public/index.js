import './style/css/main.css'

import angular from 'angular'
import 'angular-ui-router'
import 'angular-sanitize'
import 'angular-animate'

if (ON_TEST) {
  require('angular-mocks/angular-mocks')
}

import registerConfig from './config'
import registerFilters from './components/filter'
import registerMain from './components/main'

angular.module('app', [
  'app.core',
  'app.main'
])

angular.module('app.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate'
])

angular.module('app.main', [])

registerConfig()
registerFilters()
registerMain()
