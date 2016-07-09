console.log('sourced');
var myApp=angular.module( 'myApp', [] );

myApp.controller('playerController', ['$scope', '$http', function($scope, $http){
  $scope.leftArray=[];
  $scope.getPlayers = function(){
    console.log('in getPlayers');
    $http({
       method: 'GET',
       url: '/getPlayers'
     }).then( function( response ){
       $scope.allPlayers = response.data; 
       console.log( $scope.allPlayers );
     });
  };//end getPlayers

  $scope.removePlayer = function(array, index){
    $scope.leftArray.push(array.splice(index, 1));
    console.log($scope.leftArray);
  };//end removePlayer
  $scope.getPlayers();//displays players on page load
}]);
