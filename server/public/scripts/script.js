var myApp=angular.module( 'myApp', ['ui.sortable', 'ngAnimate'] );

myApp.controller('playerController', ['$scope', '$http', function($scope, $http){
  $scope.allPlayers = [];
  $scope.leftArray = [];
  $scope.myTeam = [];
  $scope.allQbs = [];
  $scope.allRbs = [];
  $scope.allWrs = [];
  $scope.allTes = [];
  $scope.allKs = [];
  $scope.allDefs = [];
  //retrieves players from DB
  $scope.getPlayers = function(){
    $http({
       method: 'GET',
       url: '/getPlayers'
     }).then( function( response ){
       $scope.allPlayers = response.data;
     });
     $scope.leftArray.length = 0;
     $scope.myTeam.length = 0;
     $scope.allQbs.length = 0;
     $scope.allRbs.length = 0;
     $scope.allWrs.length = 0;
     $scope.allTes.length = 0;
     $scope.allKs.length = 0;
     $scope.allDefs.length = 0;
  };//end getPlayers

  $scope.movePlayer = function(array, index){
    var movedPlayer = array.splice(index, 1).pop();
    $scope.leftArray.push(movedPlayer);
    if(movedPlayer.position === "QB"){//moves players to view by position
      $scope.allQbs.push(movedPlayer);
    } if(movedPlayer.position === "RB"){
      $scope.allRbs.push(movedPlayer);
    } if(movedPlayer.position === "WR"){
      $scope.allWrs.push(movedPlayer);
    } if(movedPlayer.position === "TE"){
      $scope.allTes.push(movedPlayer);
    } if(movedPlayer.position === "K"){
      $scope.allKs.push(movedPlayer);
    } if(movedPlayer.position === "DEF"){
      $scope.allDefs.push(movedPlayer);
    }
  };//end movePlayer

  $scope.removePlayer = function(array, index){
    var removedPlayer = array.splice(index, 1).pop();
    console.log("removedPlayer: ", removedPlayer.name);
    for (var i = 0; i < $scope.leftArray.length; i++) {
      if($scope.leftArray[i].name === removedPlayer.name){
        console.log("test", $scope.leftArray[i].name, removedPlayer.name);
        var test = $scope.leftArray.map(function(e){
          return e.name;
        }).indexOf(removedPlayer.name);
        console.log(test);
        $scope.leftArray.splice(test, 1);
      }
    }
  };//end removePlayer

  $scope.draftPlayer = function(array1, array2, index){
    var draftedPlayer = array1.splice(index, 1).pop();
    console.log("draftedPlayer: ", draftedPlayer.name);
    for (var i = 0; i < $scope.leftArray.length; i++) {
      if($scope.leftArray[i].name === draftedPlayer.name){
        console.log("test", $scope.leftArray[i].name, draftedPlayer.name);
        var test = $scope.leftArray.map(function(e){
          return e.name;
        }).indexOf(draftedPlayer.name);
        console.log(test);
        $scope.leftArray.splice(test, 1);
      }
    }
    array2.push(draftedPlayer);
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
    // $scope.myObj = {
    //   "color": "yellow"
    // };
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

  //removes players from each view when clicked
  $scope.removeFromViews = function(array1, index){
    var removedPlayer = array1.splice(index, 1).pop();
    console.log("in removeFromViews: ", removedPlayer.name);
    if(removedPlayer.position === "QB"){
      for (var i = 0; i < $scope.allQbs.length; i++) {
        if($scope.allQbs[i].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allQbs[i].name, removedPlayer.name);
          var getIndex1 = $scope.allQbs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          console.log(getIndex1);
          $scope.allQbs.splice(getIndex1, 1);
        }
      }
    } if(removedPlayer.position === "RB"){
      for (var j = 0; j < $scope.allRbs.length; j++) {
        if($scope.allRbs[j].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allRbs[j].name, removedPlayer.name);
          var getIndex2 = $scope.allRbs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          console.log(getIndex2);
          $scope.allRbs.splice(getIndex2, 1);
        }
      }
    } if(removedPlayer.position === "WR"){
      for (var k = 0; k < $scope.allWrs.length; k++) {
        if($scope.allWrs[k].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allWrs[k].name, removedPlayer.name);
          var getIndex3 = $scope.allWrs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          console.log(getIndex3);
          $scope.allWrs.splice(getIndex3, 1);
        }
      }
    } if(removedPlayer.position === "TE"){
      for (var l = 0; l < $scope.allTes.length; l++) {
        if($scope.allTes[l].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allTes[l].name, removedPlayer.name);
          var getIndex4 = $scope.allTes.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          console.log(getIndex4);
          $scope.allTes.splice(getIndex4, 1);
        }
      }
    } if(removedPlayer.position === "K"){
      for (var m = 0; m < $scope.allKs.length; m++) {
        if($scope.allKs[m].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allKs[m].name, removedPlayer.name);
          var getIndex5 = $scope.allKs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          console.log(getIndex5);
          $scope.allKs.splice(getIndex5, 1);
        }
      }
    } if(removedPlayer.position === "DEF"){
      for (var n = 0; n < $scope.allDefs.length; n++) {
        if($scope.allDefs[n].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allDefs[n].name, removedPlayer.name);
          var getIndex6 = $scope.allDefs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          console.log(getIndex6);
          $scope.allDefs.splice(getIndex6, 1);
        }
      }
    }
  };//end removeFromViews

  //removes all players from views from draft button
  $scope.draftFromViews = function(array1, array2, index){
    var draftedPlayer = array1.splice(index, 1).pop();
    array2.push(draftedPlayer);
    console.log("in removeFromViews: ", draftedPlayer.name);
    if(draftedPlayer.position === "QB"){
      for (var i = 0; i < $scope.allQbs.length; i++) {
        if($scope.allQbs[i].name === draftedPlayer.name){
          console.log("test removeFromViews: ", $scope.allQbs[i].name, draftedPlayer.name);
          var getIndex1 = $scope.allQbs.map(function(e){
            return e.name;
          }).indexOf(draftedPlayer.name);
          console.log(getIndex1);
          $scope.allQbs.splice(getIndex1, 1);
        }
      }
    } if(draftedPlayer.position === "RB"){
      for (var j = 0; j < $scope.allRbs.length; j++) {
        if($scope.allRbs[j].name === draftedPlayer.name){
          console.log("test removeFromViews: ", $scope.allRbs[j].name, draftedPlayer.name);
          var getIndex2 = $scope.allRbs.map(function(e){
            return e.name;
          }).indexOf(draftedPlayer.name);
          console.log(getIndex2);
          $scope.allRbs.splice(getIndex2, 1);
        }
      }
    } if(draftedPlayer.position === "WR"){
      for (var k = 0; k < $scope.allWrs.length; k++) {
        if($scope.allWrs[k].name === draftedPlayer.name){
          console.log("test removeFromViews: ", $scope.allWrs[k].name, draftedPlayer.name);
          var getIndex3 = $scope.allWrs.map(function(e){
            return e.name;
          }).indexOf(draftedPlayer.name);
          console.log(getIndex3);
          $scope.allWrs.splice(getIndex3, 1);
        }
      }
    } if(draftedPlayer.position === "TE"){
      for (var l = 0; l < $scope.allTes.length; l++) {
        if($scope.allTes[l].name === draftedPlayer.name){
          console.log("test removeFromViews: ", $scope.allTes[l].name, draftedPlayer.name);
          var getIndex4 = $scope.allTes.map(function(e){
            return e.name;
          }).indexOf(draftedPlayer.name);
          console.log(getIndex4);
          $scope.allTes.splice(getIndex4, 1);
        }
      }
    } if(draftedPlayer.position === "K"){
      for (var m = 0; m < $scope.allKs.length; m++) {
        if($scope.allKs[m].name === draftedPlayer.name){
          console.log("test removeFromViews: ", $scope.allKs[m].name, draftedPlayer.name);
          var getIndex5 = $scope.allKs.map(function(e){
            return e.name;
          }).indexOf(draftedPlayer.name);
          console.log(getIndex5);
          $scope.allKs.splice(getIndex5, 1);
        }
      }
    } if(draftedPlayer.position === "DEF"){
      for (var n = 0; n < $scope.allDefs.length; n++) {
        if($scope.allDefs[n].name === draftedPlayer.name){
          console.log("test removeFromViews: ", $scope.allDefs[n].name, draftedPlayer.name);
          var getIndex6 = $scope.allDefs.map(function(e){
            return e.name;
          }).indexOf(draftedPlayer.name);
          console.log(getIndex6);
          $scope.allDefs.splice(getIndex6, 1);
        }
      }
    }
  };//end draftFromViews
  $scope.getPlayers();//displays players on page load
}]);
