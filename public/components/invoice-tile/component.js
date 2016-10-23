'use strict'

export default () => {
  const invoiceTile = {
    bindings: {
      props: '<'
    },
    template: require('./template.html')
  }
  angular.module('app.invoices')
      .component('invoiceTile', invoiceTile)
}
