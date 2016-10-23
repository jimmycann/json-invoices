'use strict'

export default () => {
  const invoices = {
    bindings: {
      props: '<'
    },
    template: require('./template.html'),
    controller: 'InvoicesController as vm'
  }
  angular.module('app.invoices')
      .component('invoices', invoices)
}
