var myApp=angular.module( 'myApp', ['ui.sortable'] );

myApp.controller('playerController', ['$scope', '$http', function($scope, $http){
  $scope.leftArray=[];
  $scope.myTeam=[];
  $scope.trash=[];
  $scope.counter = 0;
  $scope.getPlayers = function(){
    $http({
       method: 'GET',
       url: '/getPlayers'
     }).then( function( response ){
       $scope.allPlayers = response.data;
     });
     $scope.leftArray.splice(0, $scope.leftArray.length);
     $scope.myTeam.splice(0, $scope.myTeam.length);
    //  $scope.allQbs.splice(0, $scope.allQbs.length);

  };//end getPlayers

  $scope.movePlayer = function(array, index){
    $scope.leftArray.push(array.splice(index, 1).pop());
    console.log("from leftArray: ", $scope.leftArray);
    console.log($scope.leftArray[$scope.counter].name);
    $scope.counter++;
    console.log($scope.counter);
  };//end movePlayer

  $scope.removePlayer = function(array, index){
    var trash = array.splice(index, 1).pop();
    console.log("trash: ", trash.name);
    for (var i = 0; i < $scope.leftArray.length; i++) {
      if($scope.leftArray[i].name === trash.name){
        console.log("test", $scope.leftArray[i].name, trash.name);
        var test = $scope.leftArray.map(function(e){
          return e.name;
        }).indexOf(trash.name);
        console.log(test);
        $scope.leftArray.splice(test, 1);
      }
    }
  };//end removePlayer

  $scope.draftPlayer = function(array1, array2, index){
    console.log("in draftPlayer", $scope.myTeam);
    array2.push(array1.splice(index, 1).pop());
  };//end draftPlayer

  $scope.importPlayers = function(array){
    for(var i = 0; i<200; i++){
    $scope.leftArray.push(array.splice(0, 1).pop());
  }
  $scope.getQbs();//displays QB view
  $scope.getRbs();//displays RB view
  $scope.getWrs();//displays WR view
  $scope.getTes();//displays TE view
  $scope.getKs();//displays K view
  $scope.getDefs();//displays DEF view
    console.log("leftArray from importPlayers", $scope.leftArray);
  };//end importPlayers

  $scope.getQbs = function(){
    $http({
      method: 'GET',
      url: '/getQbs'
    }).then( function( response ){
      $scope.allQbs = response.data;
      console.log("from getQbs: ", $scope.allQbs );
    });

  };// end getQbs

  $scope.getRbs = function(){
    $http({
      method: 'GET',
      url: '/getRbs'
    }).then(function(response){
      $scope.allRbs = response.data;
      console.log("from getRbs: ", $scope.allRbs);
    });
  };//end getRbs

  $scope.getWrs = function(){
    $http({
      method: 'GET',
      url: '/getWrs'
    }).then(function(response){
      $scope.allWrs = response.data;
      console.log("from getWrs: ", $scope.allWrs);
    });
  };//end getWrs

  $scope.getTes = function(){
    $http({
      method: 'GET',
      url: '/getTes'
    }).then(function(response){
      $scope.allTes = response.data;
      console.log("from getKs: ", $scope.allTes);
    });
  };//end getKs

  $scope.getKs = function(){
    $http({
      method: 'GET',
      url: '/getKs'
    }).then(function(response){
      $scope.allKs = response.data;
      console.log("from allKs: ", $scope.allKs);
    });
  };//end getKs

  $scope.getDefs = function(){
    $http({
      method: 'GET',
      url: '/getDefs'
    }).then(function(response){
      $scope.allDefs = response.data;
      console.log("from getDefs: ", $scope.allDefs);
    });
  };//end getDefs

  $scope.getPlayers();//displays players on page load

}]);
