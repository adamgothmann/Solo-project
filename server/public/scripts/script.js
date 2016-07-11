var myApp=angular.module( 'myApp', [] );

myApp.controller('playerController', ['$scope', '$http', function($scope, $http){
  $scope.leftArray=[];
  $scope.myTeam=[];
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

  $scope.movePlayer = function(array, index){
    $scope.leftArray.push(array.splice(index, 1));
    console.log($scope.leftArray);

  };//end removePlayer

  $scope.removePlayer = function(array, index){
    console.log("in removeplayer");
    $scope.leftArray.splice(index, 1);
    console.log($scope.leftArray);
  };
  $scope.draftPlayer = function(array, index){
    console.log("in draftPlayer");
    $scope.myTeam.push(array.splice(index, 1));
    console.log($scope.myTeam);
  };
  $scope.getPlayers();//displays players on page load
}]);
