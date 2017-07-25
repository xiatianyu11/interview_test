describe('Services Progress', function() {
	beforeEach(module('myApp'));

	 it('can get an instance of Progress', inject(function(Progress) {
	    expect(Progress).toBeDefined();
	 }));
});