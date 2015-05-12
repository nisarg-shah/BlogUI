	'use strict';

	/**
	 * @ngdoc function
	 * @name clientApp.controller:BlogCtrl
	 * @description
	 * # BlogCtrl
	 * Controller of the clientApp
	 */
	angular.module('clientApp')
	  .controller('BlogCtrl', function ($scope, Blog) {
	  $scope.blogs = Blog.getList().$object;
		  });
