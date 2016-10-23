'use strict'

export default () => {
  const stockTile = {
    bindings: {
      props: '<',
      index: '<'
    },
    template: require('./template.html')
  }
  angular.module('app.stock')
      .component('stockTile', stockTile)
}
