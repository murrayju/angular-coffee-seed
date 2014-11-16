define [
  'angular'
  'angular-mocks'
  'cs!app'
], (angular, mocks, app) ->
  describe 'Controller: P1Ctrl', () ->
    $scope = null
    P1Ctrl = null

    beforeEach(mocks.module(app.name))

    beforeEach mocks.inject ($injector, $rootScope) ->
      # The $controller service is used to create instances of controllers
      $controller = $injector.get('$controller')

      $scope = $rootScope.$new()
      P1Ctrl = $controller('P1Ctrl', { $scope: $scope })

    it 'should attach to the scope', () ->
      expect $scope.data
        .toBe 'Check out this data binding!'
