angular.module('myApp')
    .directive('myProgress', function ($timeout, Progress) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/myProgress.html',
        link: function ($scope, element, attrs) {

            var progressPromise = Progress.getData();
              progressPromise.then(function(res){
                  $timeout(function(){
                    $scope.data = res.data;
                     console.log($scope.data);
                  });


              },function(err){
                   console.log('************ Get Bar List Error', err);
              });


              $scope.barWidth = [];
              $scope.getBarWidth = function(index, width){
                  if( $scope.barWidth[index] <= 0 ){
                      return 0;
                  }else if(!!!$scope.barWidth[index] ){
                     $scope.barWidth[index] = width;
                     return width;
                  }else{
                     return $scope.barWidth[index];
                  }
              }

              $scope.isInvalid = function(index){
                  if(!!$scope.barWidth[index] && $scope.barWidth[index] > 100){
                     return true;
                  }else{
                     return false;
                  }
              }

              $scope.setBarWidth = function(width){
                  var index = $scope.selectedIndex;
                  if( $scope.barWidth[index] != 0 && !!!$scope.barWidth[index] ){
                      $scope.barWidth[index] = width;
                  }else{

                     if($scope.barWidth[index] + width < 0){
                        $scope.barWidth[index] = 0;
                     }else if($scope.barWidth[index] + width > $scope.data.limit){
                        $scope.barWidth[index] = $scope.data.limit;
                     }else{
                        $scope.barWidth[index] = $scope.barWidth[index] + width;
                     }
                  }
              }

              $scope.selectedIndex = 0;

        }
    }
});