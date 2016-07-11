var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
          when("/allRight", {
              templateUrl: "/views/routes/home.html",
              controller: "HomeController"
          }).
          when("/qbRight", {
              templateUrl: "/views/routes/home.html",
              controller: "ProjectsController"
          }).
          when("/rbRight", {
              templateUrl: "/views/routes/cats.html",
              controller: "CatsController"
          }).
          when("/wrRight", {
              templateUrl: "/views/routes/cats.html",
              controller: "CatsController"
          }).
          when("/teRight", {
              templateUrl: "/views/routes/cats.html",
              controller: "CatsController"
          }).
          when("/kRight", {
              templateUrl: "/views/routes/cats.html",
              controller: "CatsController"
          }).
          when("/defRight", {
              templateUrl: "/views/routes/cats.html",
              controller: "CatsController"
          }).
          otherwise({
            redirectTo: "/allRight"
          });
}]);

myApp.controller("HomeController", ["$scope", "CounterService", function($scope, CounterService){
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
