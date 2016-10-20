describe('mainFactory test', () => {
  beforeEach(window.module('app.main'))

  var factory
  beforeEach(inject(($injector) => {
    factory = $injector.get('mainFactory')
  }))

  describe('mainFactory get_data', () => {
    it('should return some arbitrary data', () => {
      expect(1).toBe(1)
    })
  })
})
