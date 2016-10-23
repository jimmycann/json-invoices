'use strict'

export default () => {
  const supplierTile = {
    bindings: {
      props: '<'
    },
    template: require('./template.html')
  }
  angular.module('app.suppliers')
      .component('supplierTile', supplierTile)
}
