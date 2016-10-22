'use strict'

export default () => {
  angular.module('app.upload')
      .controller('FileUploadController', FileUploadController)

  FileUploadController.$inject = ['$scope', '$window', 'FileUploader']

  function FileUploadController ($scope, $window, FileUploader) {
    let vm = this

    vm.$onInit = () => {
      let uploader = vm.uploader = new FileUploader({
        url: '/api/v1/invoice/insert',
        removeAfterUpload: true
      })
      uploader.filters.push({
        name: 'customFilter',
        fn: () => {
          return vm.uploader.queue.length < 10
        }
      })
      uploader.onAfterAddingAll = () => {
        uploader.uploadAll()
      }
      uploader.onCompleteAll = () => {}
      vm.controller = {
        isJson: (item) => {
          var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|'
          return '|json|'.indexOf(type) !== -1
        }
      }
    }
  }
}
