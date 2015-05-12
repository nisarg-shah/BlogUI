'use strict';

describe('Controller: BlogDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BlogDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogDeleteCtrl = $controller('BlogDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
