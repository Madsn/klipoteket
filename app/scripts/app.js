'use strict';

angular
  .module('klipoteket', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angular-flexslider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/forside.html'
      })
      .when('/personale', {
        templateUrl: 'views/personale.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function HeaderController($scope, $location) {
  $scope.isActive = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
  };
}
