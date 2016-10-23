'use strict'

export default () => {
  angular.module('app.suppliers')
      .factory('suppliersFactory', suppliersFactory)

  suppliersFactory.$inject = ['$http']

  function suppliersFactory ($http) {
    return {
      fetchAll: fetchAll
    }
    function fetchAll (data) {
      return $http({
        method: 'POST',
        url: '/api/v1/suppliers/fetch-all',
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
