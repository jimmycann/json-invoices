export default () => {
  angular.module('app')
    .filter('mainFilter', () => {
      return function(input, scope) {
        return true
      }
    })
}
