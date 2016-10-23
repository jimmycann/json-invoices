'use strict'

export default () => {
  const stockTile = {
    bindings: {
      props: '<'
    },
    template: require('./template.html')
  }
  angular.module('app.stock')
      .component('stockTile', stockTile)
}
