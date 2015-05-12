'use strict';

describe('Controller: BlogEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BlogEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogEditCtrl = $controller('BlogEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
