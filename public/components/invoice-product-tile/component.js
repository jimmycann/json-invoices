'use strict'

export default () => {
  const invoiceProductTile = {
    bindings: {
      props: '<',
      index: '<'
    },
    template: require('./template.html')
  }
  angular.module('app.invoices')
      .component('invoiceProductTile', invoiceProductTile)
}
