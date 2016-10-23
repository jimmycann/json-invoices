'use strict'

export default () => {
  angular.module('app.stock')
      .controller('StockController', StockController)

  StockController.$inject = ['PubSub', 'stockFactory']

  function StockController (PubSub, stockFactory) {
    let vm = this

    vm.$onInit = () => {
      vm.stock = []
      PubSub.subscribe('stock', (data) => {
        let find = false
        _.find(vm.stock, (obj, key) => {
          if (obj.product_id === data.product_id) {
            vm.stock[key] = data
            find = true
          }
        })
        if (!find) vm.stock.push(data)
      })
      stockFactory.fetchAll().then((res) => {
        vm.stock = _.reverse(res)
      })
    }
  }
}
