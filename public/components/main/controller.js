'use strict'

export default () => {
  if (ON_TEST) {
    require('./test/main.controller.test')
  }

  angular.module('app.main')
      .controller('MainController', MainController)

  function MainController () {
    let vm = this
    vm.hey = 'hello'
  }
}
