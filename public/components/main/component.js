'use strict'

export default () => {
  if (ON_TEST) {
    require('./test/auctions.component.test')
  }
  const auctions = {
    bindings: {
      props: '='
    },
    controller: 'AuctionsController as Auctions',
    template: require('./views/auctions-main.html')
  }
  angular.module('app.auctions')
      .component('auctions', auctions)
}
