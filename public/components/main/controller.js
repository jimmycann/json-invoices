'use strict'

export default () => {
  if (ON_TEST) {
    require('./test/main.controller.test')
  }

  angular.module('app.main')
      .controller('MainController', MainController)

  MainController.$inject = ['PubSub']

  function MainController (PubSub) {
    let vm = this

    vm.$onInit = () => {
      PubSub.subscribe('stock', (data) => {
        console.log(data)
      })
      PubSub.subscribe('suppliers', (data) => {
        console.log(data)
      })
      PubSub.subscribe('invoices', (data) => {
        console.log(data)
      })
    }
  }
}
