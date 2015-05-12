'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BlogEditCtrl
 * @description
 * # BlogEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BlogEditCtrl', function ($scope, $routeParams, Blog, $location ) {
  $scope.editBlog = true;
  $scope.blog = {};
  Blog.one($routeParams.id).get().then(function(blog) {
    $scope.blog = blog;
    $scope.saveBlog = function() {
      $scope.blog.save().then(function() {
        $location.path('/blog/' + $routeParams.id);
      });
    };
  });
});