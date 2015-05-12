'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/create/blog', {
        templateUrl: 'views/blog-add.html',
        controller: 'BlogAddCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-view.html',
        controller: 'BlogViewCtrl'
      })
      .when('/blog/:id/delete', {
        templateUrl: 'views/blog-delete.html',
        controller: 'BlogDeleteCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-edit.html',
        controller: 'BlogEditCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('BlogRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
.factory('Blog', function(BlogRestangular) {
  return BlogRestangular.service('blog');
});
