var myApp=angular.module( 'myApp', ['ui.sortable', 'ngAnimate'] );

myApp.controller('playerController', ['$scope', '$http', function($scope, $http){
  $scope.allPlayers = [];
  $scope.rankings = [];
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
     $scope.rankings.length = 0;
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
    $scope.rankings.push(movedPlayer);
    switch (movedPlayer.position){
      case 'QB':
        $scope.allQbs.push(movedPlayer);
        break;
      case 'RB':
        $scope.allRbs.push(movedPlayer);
        break;
      case 'WR':
        $scope.allWrs.push(movedPlayer);
        break;
      case 'TE':
        $scope.allTes.push(movedPlayer);
        break;
      case 'K':
        $scope.allKs.push(movedPlayer);
        break;
      case 'DEF':
        $scope.allDefs.push(movedPlayer);
        break;
    }
  };//end movePlayer

  $scope.removePlayer = function(array, index){
    var removedPlayer = array.splice(index, 1).pop();
    console.log("removedPlayer: ", removedPlayer.name);
    for (var i = 0; i < $scope.rankings.length; i++) {
      if($scope.rankings[i].name === removedPlayer.name){
        console.log("test", $scope.rankings[i].name, removedPlayer.name);
        var test = $scope.rankings.map(function(e){
          return e.name;
        }).indexOf(removedPlayer.name);
        console.log(test);
        $scope.rankings.splice(test, 1);
      }
    }
  };//end removePlayer

  $scope.draftPlayer = function(array1, array2, index){
    var draftedPlayer = array1.splice(index, 1).pop();
    console.log("draftedPlayer: ", draftedPlayer.name);
    for (var i = 0; i < $scope.rankings.length; i++) {
      if($scope.rankings[i].name === draftedPlayer.name){
        console.log("test", $scope.rankings[i].name, draftedPlayer.name);
        var test = $scope.rankings.map(function(e){
          return e.name;
        }).indexOf(draftedPlayer.name);
        console.log(test);
        $scope.rankings.splice(test, 1);
      }
    }
    array2.push(draftedPlayer);
  };//end draftPlayer

  $scope.importPlayers = function(array){
    var player;
    for(var i = 0; i<200; i++){
      player = array.splice(0,1).pop();
      switch (player.position) { //puts each player in tabs by position
        case 'QB':
          $scope.allQbs.push(player);
          break;
        case 'RB':
          $scope.allRbs.push(player);
          break;
        case 'WR':
          $scope.allWrs.push(player);
          break;
        case 'TE':
          $scope.allTes.push(player);
          break;
        case 'K':
          $scope.allKs.push(player);
          break;
        case 'DEF':
          $scope.allDefs.push(player);
      }
      $scope.rankings.push(player);
      console.log($scope.rankings);
      console.log(player.position);
    }
    console.log("rankings from importPlayers", $scope.leftArray);
  };//end importPlayers

  //removes players from each view when clicked
  $scope.removeFromViews = function(array1, index){
    var removedPlayer = array1.splice(index, 1).pop();
    var getIndex;
    console.log("in removeFromViews: ", removedPlayer.name);
    if(removedPlayer.position === "QB"){
      console.log('wat');
      for (var i = 0; i < $scope.allQbs.length; i++) {
        if($scope.allQbs[i].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allQbs[i].name, removedPlayer.name);
          getIndex = $scope.allQbs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          $scope.allQbs.splice(getIndex, 1);
        }
      }
    } if(removedPlayer.position === "RB"){
      for (var j = 0; j < $scope.allRbs.length; j++) {
        if($scope.allRbs[j].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allRbs[j].name, removedPlayer.name);
          getIndex = $scope.allRbs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          $scope.allRbs.splice(getIndex, 1);
        }
      }
    } if(removedPlayer.position === "WR"){
      for (var k = 0; k < $scope.allWrs.length; k++) {
        if($scope.allWrs[k].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allWrs[k].name, removedPlayer.name);
          getIndex = $scope.allWrs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          $scope.allWrs.splice(getIndex, 1);
        }
      }
    } if(removedPlayer.position === "TE"){
      for (var l = 0; l < $scope.allTes.length; l++) {
        if($scope.allTes[l].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allTes[l].name, removedPlayer.name);
          getIndex = $scope.allTes.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          $scope.allTes.splice(getIndex, 1);
        }
      }
    } if(removedPlayer.position === "K"){
      for (var m = 0; m < $scope.allKs.length; m++) {
        if($scope.allKs[m].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allKs[m].name, removedPlayer.name);
          getIndex = $scope.allKs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          $scope.allKs.splice(getIndex, 1);
        }
      }
    } if(removedPlayer.position === "DEF"){
      for (var n = 0; n < $scope.allDefs.length; n++) {
        if($scope.allDefs[n].name === removedPlayer.name){
          console.log("test removeFromViews: ", $scope.allDefs[n].name, removedPlayer.name);
          getIndex = $scope.allDefs.map(function(e){
            return e.name;
          }).indexOf(removedPlayer.name);
          $scope.allDefs.splice(getIndex, 1);
        }
      }
    }
  };//end removeFromViews

  //removes all players from views from draft button
  $scope.draftFromViews = function(array1, array2, index){
    var getIndex;
    var draftedPlayer = array1.splice(index, 1).pop();
    array2.push(draftedPlayer);
    console.log("in removeFromViews: ", draftedPlayer.name);
    switch (draftedPlayer.position){
      case 'QB':
        for (var i = 0; i < $scope.allQbs.length; i++) {
          if($scope.allQbs[i].name === draftedPlayer.name){
            console.log("test removeFromViews: ", $scope.allQbs[i].name, draftedPlayer.name);
             getIndex = $scope.allQbs.map(function(e){
              return e.name;
            }).indexOf(draftedPlayer.name);
            console.log(getIndex);
            $scope.allQbs.splice(getIndex, 1);
          }
        }
        break;
      case 'RB':
        for (var j = 0; j < $scope.allRbs.length; j++) {
          if($scope.allRbs[j].name === draftedPlayer.name){
            console.log("test removeFromViews: ", $scope.allRbs[j].name, draftedPlayer.name);
             getIndex = $scope.allRbs.map(function(e){
              return e.name;
            }).indexOf(draftedPlayer.name);
            console.log(getIndex);
            $scope.allRbs.splice(getIndex, 1);
          }
        }
        break;
      case 'WR':
        for (var k = 0; k < $scope.allWrs.length; k++) {
          if($scope.allWrs[k].name === draftedPlayer.name){
            console.log("test removeFromViews: ", $scope.allWrs[k].name, draftedPlayer.name);
             getIndex = $scope.allWrs.map(function(e){
              return e.name;
            }).indexOf(draftedPlayer.name);
            console.log(getIndex);
            $scope.allWrs.splice(getIndex, 1);
          }
        }
        break;
      case 'TE':
        for (var l = 0; l < $scope.allTes.length; l++) {
          if($scope.allTes[l].name === draftedPlayer.name){
            console.log("test removeFromViews: ", $scope.allTes[l].name, draftedPlayer.name);
             getIndex = $scope.allTes.map(function(e){
              return e.name;
            }).indexOf(draftedPlayer.name);
            console.log(getIndex);
            $scope.allTes.splice(getIndex, 1);
          }
        }
        break;
      case 'K':
        for (var m = 0; m < $scope.allKs.length; m++) {
          if($scope.allKs[m].name === draftedPlayer.name){
            console.log("test removeFromViews: ", $scope.allKs[m].name, draftedPlayer.name);
             getIndex = $scope.allKs.map(function(e){
              return e.name;
            }).indexOf(draftedPlayer.name);
            console.log(getIndex);
            $scope.allKs.splice(getIndex, 1);
          }
        }
        break;
      case 'DEF':
        for (var n = 0; n < $scope.allDefs.length; n++) {
          if($scope.allDefs[n].name === draftedPlayer.name){
            console.log("test removeFromViews: ", $scope.allDefs[n].name, draftedPlayer.name);
             getIndex = $scope.allDefs.map(function(e){
              return e.name;
            }).indexOf(draftedPlayer.name);
            console.log(getIndex);
            $scope.allDefs.splice(getIndex, 1);
          }
        }
        break;
    }
    // $scope.draftViews = function(array1, array2, index){
    //   var draftedPlayer = array1.splice(index, 1).pop();
    //   $scope.myTeam.push(draftedPlayer);
    //   for (var s = 0; s < array2.length; s++){
    //
    //   }
    // };
  };//end draftFromViews
  $scope.getPlayers();//displays players on page load
}]);
