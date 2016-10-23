'use strict'

export default () => {
  const invoiceTile = {
    bindings: {
      props: '<',
      index: '<'
    },
    controller: function () {
      let vm = this
      vm.$onInit = () => {
        vm.showProducts = false
      }
      vm.showProductsToggle = () => {
        vm.showProducts = !vm.showProducts
      }
    },
    template: require('./template.html')
  }
  angular.module('app.invoices')
      .component('invoiceTile', invoiceTile)
}
