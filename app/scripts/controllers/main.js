'use strict';

/**
 * @ngdoc function
 * @name provaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the provaApp
 */
angular.module('provaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
