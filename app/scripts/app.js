'use strict';

/**
 * @ngdoc overview
 * @name provaApp
 * @description
 * # provaApp
 *
 * Main module of the application.
 */
angular
  .module('provaApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
