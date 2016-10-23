'use strict'

export default () => {
  angular.module('app.invoices')
      .factory('invoicesFactory', invoicesFactory)

  invoicesFactory.$inject = ['$http']

  function invoicesFactory ($http) {
    return {
      fetchAll: fetchAll
    }
    function fetchAll (data) {
      return $http({
        method: 'POST',
        url: '/api/v1/invoices/fetch-all',
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
