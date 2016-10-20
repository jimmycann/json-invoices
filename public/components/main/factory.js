'use strict'

export default () => {
  if (ON_TEST) {
    require('./test/main.factory.test')
  }

  angular.module('app.main')
      .factory('mainFactory', mainFactory)

  mainFactory.$inject = ['$http']

  function mainFactory ($http) {
    return {
      mainRoute: mainRoute
    }
    function mainRoute (data) {
      return $http({
        method: 'POST',
        url: '/api/main/test',
        data: data
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        return err.data
      })
    }
  }
}
