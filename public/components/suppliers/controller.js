'use strict'

export default () => {
  angular.module('app.suppliers')
      .controller('SuppliersController', SuppliersController)

  SuppliersController.$inject = ['PubSub', 'suppliersFactory']

  function SuppliersController (PubSub, suppliersFactory) {
    let vm = this

    vm.$onInit = () => {
      vm.suppliers = []
      PubSub.subscribe('suppliers', (data) => {
        let find = false
        _.find(vm.suppliers, (obj, key) => {
          if (obj.supplier_id === data.supplier_id) {
            vm.suppliers[key] = data
            find = true
          }
        })
        if (!find) vm.suppliers.push(data)
      })
      suppliersFactory.fetchAll().then((res) => {
        if (res.length > 0) res = _.reverse(res)
        vm.suppliers = res
      })
    }
  }
}
