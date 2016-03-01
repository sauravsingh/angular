var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider, $locationProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          })
          .when('/read',{
                templateUrl: 'read.html'
          })
          .when('/form',{
                templateUrl: 'form.html'
          });

          $locationProvider.html5Mode(true);
});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});
