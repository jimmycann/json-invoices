export default () => {
  if (ON_TEST) {
    require('./test/main.filter.test')
  }

  angular.module('app')
    .filter('mainFilter', () => {
      return function(input, scope) {
        return true
      }
    })
}
