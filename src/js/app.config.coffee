define [], () -> [
  '$stateProvider'
  '$urlRouterProvider'
  ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise("/page1")

    $stateProvider
      .state 'link1', {
        url: '/page1'
        templateUrl: 'template/p1.html'
        controller: 'P1Ctrl'
      }
      .state 'link2', {
        url: '/page2'
        templateUrl: 'template/p2.html'
        controller: ['$scope', ($scope) ->
          $scope.things = ['A', 'list', 'of', 'things']
        ]
      }
]
