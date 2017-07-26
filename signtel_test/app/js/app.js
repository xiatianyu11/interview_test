angular.module('myApp', [])
.run(function($http, $templateCache){

	$http.get('views/myProgress.html', { cache: $templateCache });

});