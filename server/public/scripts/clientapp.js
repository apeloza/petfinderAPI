
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "homeController"
    })
    .when('/dog', {
      templateUrl: '/views/pets.html',
      controller: "dogController"
    })
    .when('/rabbit', {
      templateUrl: '/views/pets.html',
      controller: "rabbitController"
    })
    .when('/pig', {
      templateUrl: '/views/pets.html',
      controller: "pigController"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
