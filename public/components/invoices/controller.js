'use strict'

export default () => {
  angular.module('app.invoices')
      .controller('InvoicesController', InvoicesController)

  InvoicesController.$inject = ['$scope', 'PubSub', 'invoicesFactory']

  function InvoicesController ($scope, PubSub, invoicesFactory) {
    let vm = this

    vm.$onInit = () => {
      vm.invoices = []
      PubSub.subscribe('invoices', (data) => {
        let find = false
        _.find(vm.invoices, (obj, key) => {
          if (obj.invoice_number === data.invoice_number) {
            console.log(data)
            vm.invoices[key] = data
            find = true
          }
        })
        if (!find) vm.invoices.push(data)
        $scope.$digest()
      })
      invoicesFactory.fetchAll().then((res) => {
        vm.invoices = res
      })
    }
  }
}
