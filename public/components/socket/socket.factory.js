'use strict'

export default () => {
  angular.module('app.socket')
      .factory('socket', socket)

  const io = require('socket.io-client')

  function socket () {
    const socket = io.connect('http://localhost:3001')
    socket.on('connect', () => {
      console.log('User connected to socket')
    })
    return socket
  }
}
