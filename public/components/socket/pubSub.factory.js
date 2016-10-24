'use strict'

export default () => {
  angular.module('app.socket')
      .factory('PubSub', PubSub)

  const io = require('socket.io-client')
  const socket = io.connect('http://127.0.0.1')

  function PubSub () {
    let container = []

    return {
      initialize: initialize,
      subscribe: subscribe,
      pushContainer: pushContainer,
      unsubscribeAll: unsubscribeAll,
      unsubscribe: unsubscribe
    }

    function initialize () {
      socket.on('connect', () => {
        console.log('User connected to socket')
      })
    }

    function subscribe (channel, callback) {
      console.log(channel)
      this.pushContainer(channel)
      return socket.on(channel, callback)
    }

    function pushContainer (subscriptionName) {
      container.push(subscriptionName)
    }

    function unsubscribe (channel) {
      socket.removeAllListeners(channel)
      _.pullAt(container, channel)
    }

    function unsubscribeAll () {
      _.each(container, (channel) => {
        socket.removeAllListeners(channel)
      })
      container = []
    }
  }
}
