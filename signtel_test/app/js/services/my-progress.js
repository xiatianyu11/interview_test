angular.module('myApp').factory('Progress', function ($q, $http) {

	var progress = {

		getData : function () {
			 var def = $q.defer();
			 $http.get("http://pb-api.herokuapp.com/bars").then(
			 	   function(response){
			         def.resolve({
	                    success : true,
	                    message : "Successful",
	                    data : response.data
	                 });
			       },
			       function(response){
			         def.resolve({
	                    success : false,
	                    message : "fail",
	                    data : null
	                 });
			       }
			 );


			 return def.promise;
		}
	};

	return progress;

  });