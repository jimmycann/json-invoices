describe('mainController test', function () {
  beforeEach(window.module('app.main'))

  var main, scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new()
    // To comply with controllerAs syntax
    main = $controller('MainController')
  }))

  it('scope hey should say hello', () => {
    expect(main.hey).toBe('hello')
  })
})
