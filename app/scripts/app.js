'use strict';

var app = angular.module('klipoteketApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angular-flexslider'
  ]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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
    $locationProvider.html5Mode( true );
  }]);


function HeaderCtrl($scope, $location, $route) {
  $scope.activePath = null;
  $scope.$on('$routeChangeSuccess', function(){
    $scope.activePath = $location.path();
  });
}
HeaderCtrl.$inject = ['$scope', '$location', '$route'];
function SlideshowCtrl($scope){
  $scope.slides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
}
SlideshowCtrl.$inject = ['$scope'];

