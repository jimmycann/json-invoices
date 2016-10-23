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

import Config from './config'
import Socket from './components/socket'
import Filters from './components/filter'
import Main from './components/main'
import FileUpload from './components/file-upload'

import Invoices from './components/invoices'
import InvoiceTile from './components/invoice-tile'
import InvoiceProductTile from './components/invoice-product-tile'

import Suppliers from './components/suppliers'
import SupplierTile from './components/supplier-tile'

import Stock from './components/stock'
import StockTile from './components/stock-tile'

angular.module('app', [
  'app.core',
  'app.main',
  'app.socket',
  'app.upload',
  'app.stock',
  'app.invoices',
  'app.suppliers'
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
angular.module('app.invoices', [])
angular.module('app.suppliers', [])

Config()
Socket()
Filters()
Main()
FileUpload()

Invoices()
InvoiceTile()
InvoiceProductTile()

Suppliers()
SupplierTile()

Stock()
StockTile()
