'use strict';

/**
 * @ngdoc function
 * @name provaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the provaApp
 */
angular.module('provaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
