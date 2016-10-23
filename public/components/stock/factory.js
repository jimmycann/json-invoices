'use strict'

export default () => {
  angular.module('app.stock')
      .factory('stockFactory', stockFactory)

  stockFactory.$inject = ['$http']

  function stockFactory ($http) {
    return {
      fetchAll: fetchAll
    }
    function fetchAll (data) {
      return $http({
        method: 'POST',
        url: '/api/v1/stock/fetch-all',
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
