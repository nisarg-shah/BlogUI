'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BlogAddCtrl
 * @description
 * # BlogAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BlogAddCtrl', function ($scope ,Blog,  $location ) {
  $scope.blog = {};
  $scope.saveBlog = function() {
    Blog.post($scope.blog).then(function() {
      $location.path('/blog');
    });
  };
});