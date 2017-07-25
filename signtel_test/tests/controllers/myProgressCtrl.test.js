'use strict';

describe('Controller: myProgressCtrl', function () {
	var scope, mockProgress, myProgressCtrl;
	var passPromise = false;


	beforeEach(function(){
		module(function($provide){
		    $provide.factory('Progress', ['$q', function($q){
		    	function getData(){
		    		if(passPromise){
		    			return $q.when();
		    		} else {
		    			return $q.reject();
		    		}
			    }
			    return {
			    	getData: getData
			    };
		    }]);
		 });
		module('myApp');
	});


	beforeEach(inject(function($rootScope, $controller, Progress){
		  scope=$rootScope.$new();
		  mockProgress=Progress;
		  spyOn(mockProgress,'getData').and.callThrough();
		  myProgressCtrl = $controller('myProgressCtrl', {
		    $scope: scope,
		    Progress: mockProgress
		  });
	}));


	it('should call getData method on Progress on calling getData', function(){

	    passPromise = true;
	    expect(mockProgress.getData).toHaveBeenCalled();
	});
});
