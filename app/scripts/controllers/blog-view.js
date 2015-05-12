'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BlogViewCtrl
 * @description
 * # BlogViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BlogViewCtrl', function ($scope, $routeParams, Blog) {
  $scope.viewBlog = true;
  $scope.blog = Blog.one($routeParams.id).get().$object;
});
