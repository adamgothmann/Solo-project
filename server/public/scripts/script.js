var myApp=angular.module( 'myApp', ['ui.sortable'] );

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
       console.log("allPlayers from GET: ", $scope.allPlayers );
     });
     $scope.leftArray.splice(0, $scope.leftArray.length);
     $scope.myTeam.splice(0, $scope.myTeam.length);
  };//end getPlayers

  $scope.movePlayer = function(array, index){
    $scope.leftArray.push(array.splice(index, 1).pop());
    console.log("from leftArray: ", $scope.leftArray);
  };//end movePlayer

  $scope.removePlayer = function(array, index){
    console.log("in removeplayer: ", $scope.leftArray);
    $scope.leftArray.splice(index, 1);
  };//end removePlayer

  $scope.draftPlayer = function(array, index){
    console.log("in draftPlayer", $scope.myTeam);
    $scope.myTeam.push(array.splice(index, 1).pop());
  };//end draftPlayer

  $scope.importPlayers = function(array){
    for(var i = 0; i<200; i++){
    $scope.leftArray.push(array.splice(0, 1).pop());
  }
    console.log("leftArray from importPlayers", $scope.leftArray);
  };//end importPlayers
  $scope.getPlayers();//displays players on page load
}]);
