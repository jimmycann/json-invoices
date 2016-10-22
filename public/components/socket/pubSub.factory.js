'use strict'

export default () => {
  if (ON_TEST) {
    require('./test/main.factory.test')
  }

  angular.module('app.main')
      .factory('pubSubFactory', pubSubFactory)

  pubSubFactory.$inject = ['socket']

  function pubSubFactory (socket) {
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
