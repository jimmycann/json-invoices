import socketFactory from './socket.factory'
import PubSub from './PubSub.factory'

export default () => {
  socketFactory()
  PubSub()
}
