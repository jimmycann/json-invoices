'use strict'

export default () => {
  angular.module('app')
  .run((PubSub) => {
    PubSub.initialize()
  })
}
