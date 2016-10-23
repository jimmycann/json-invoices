'use strict'

export default () => {
  const stock = {
    bindings: {
      props: '<'
    },
    template: require('./template.html'),
    controller: 'StockController as vm'
  }
  angular.module('app.stock')
      .component('stock', stock)
}
