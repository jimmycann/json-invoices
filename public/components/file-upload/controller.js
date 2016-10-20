'use strict'

export default () => {
  angular.module('app.upload')
      .controller('FileUploadController', FileUploadController)

  FileUploadController.$inject = ['$scope', '$window', 'FileUploader']

  function FileUploadController ($scope, $window, FileUploader) {
    let vm = this
    const uploader = vm.uploader = new FileUploader({
      url: '/api/upload/invoice',
      removeAfterUpload: true
    })
    uploader.filters.push({
      name: 'customFilter',
      fn: () => {
        return vm.uploader.queue.length < 10
      }
    })

    $scope.$parent.uploadedFiles = []

    uploader.onWhenAddingFileFailed = function (item /* {File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options)
    }
    uploader.onAfterAddingFile = function (fileItem) {
        console.info('onAfterAddingFile', fileItem)
    }
    uploader.onAfterAddingAll = function (addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems)
    }
    uploader.onBeforeUploadItem = function (item) {
        console.info('onBeforeUploadItem', item)
    }
    uploader.onProgressItem = function (fileItem, progress) {
        // console.info('onProgressItem', fileItem, progress)
    }
    uploader.onProgressAll = function (progress) {
        // console.info('onProgressAll', progress)
    }
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        // console.info('onSuccessItem', fileItem, response, status, headers)
    }
    uploader.onErrorItem = function (fileItem, response, status, headers) {
        // console.info('onErrorItem', fileItem, response, status, headers)
    }
    uploader.onCancelItem = function (fileItem, response, status, headers) {
        // console.info('onCancelItem', fileItem, response, status, headers)
    }
    uploader.onCompleteItem = function (fileItem, response, status, headers) {
      console.info(fileItem, response, status, headers)
      let isMain = false
      if ($scope.$parent.uploadedFiles.length === 0) isMain = true
      $scope.$parent.uploadedFiles.push({
        filename: response.filename,
        uploadId: response.uploadId,
        isMain: isMain,
        sequence: $scope.$parent.uploadedFiles.length + 1
      })
    }
    uploader.onCompleteAll = function () {
      console.info('onCompleteAll')
    }
    console.info('uploader', uploader)

    vm.controller = {
      isImage: (item) => {
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|'
        return '|json|'.indexOf(type) !== -1
      }
    }
  }
}
