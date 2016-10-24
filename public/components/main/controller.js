'use strict'

export default () => {
  angular.module('app.main')
      .controller('MainController', MainController)

  MainController.$inject = ['$stateParams']

  function MainController ($stateParams) {
    let vm = this

    vm.switch = (view) => {
      vm.view = view
    }

    vm.$onInit = () => {
      vm.view = $stateParams.view || 'stock'
    }
  }
}
