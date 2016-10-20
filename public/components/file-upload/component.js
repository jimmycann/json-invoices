'use strict'

export default () => {
  const fileUpload = {
    bindings: {
      props: '<'
    },
    template: require('./template.html'),
    controller: 'FileUploadController as vm'
  }
  angular.module('app.upload')
      .component('fileUpload', fileUpload)
}
