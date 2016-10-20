describe("mainController test", function () {

    beforeEach(window.module("app"));

    var filter;
    beforeEach(inject(function($filter) {
        filter = $filter('mainFilter');
    }));

    it('filter should return true', function() {
        expect(filter('hey')).toBe(true);
    });

});