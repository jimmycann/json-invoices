'use strict'

export default () => {
  angular.module('app.upload')
      .controller('FileUploadController', FileUploadController)

  FileUploadController.$inject = ['$scope', '$window', '$timeout', 'FileUploader']

  function FileUploadController ($scope, $window, $timeout, FileUploader) {
    let vm = this

    vm.$onInit = () => {
      let uploader = vm.uploader = new FileUploader({
        url: '/api/v1/invoice/insert',
        removeAfterUpload: true
      })
      uploader.onAfterAddingAll = () => {
        uploader.uploadAll()
      }
      uploader.onCompleteItem = (fileItem, response) => {
        console.info(response)
        vm.notification = response
        $timeout(() => {
          vm.notification = null
        }, 2000)
      }
      vm.controller = {
        isJson: (item) => {
          var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|'
          return '|json|'.indexOf(type) !== -1
        }
      }
    }
  }
}
