'use strict';

describe('Controller: BlogViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BlogViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogViewCtrl = $controller('BlogViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
