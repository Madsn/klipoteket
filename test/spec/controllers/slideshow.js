'use strict';

describe('Controller: SlideshowCtrl', function () {

  // load the controller's module
  beforeEach(module('systematicEmployeesClubApp'));

  var SlideshowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlideshowCtrl = $controller('SlideshowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
