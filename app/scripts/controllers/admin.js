'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AdminCtrl', function ($scope, Blog) {
	  $scope.blogs = Blog.getList().$object;
  });
