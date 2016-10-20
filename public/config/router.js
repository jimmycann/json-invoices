export default () => {
  angular.module('app')
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
      $urlRouterProvider.otherwise('/')

      $stateProvider.state('base', {
        url: '/',
        templateUrl: 'components/main/template.html',
        controller: 'MainController as vm',
        controllerAs: 'main'
      })
      $locationProvider.html5Mode(true)
    })
}
