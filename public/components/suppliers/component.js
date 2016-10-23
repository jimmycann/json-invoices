'use strict'

export default () => {
  const suppliers = {
    bindings: {
      props: '<'
    },
    template: require('./template.html'),
    controller: 'SuppliersController as vm'
  }
  angular.module('app.suppliers')
      .component('suppliers', suppliers)
}
