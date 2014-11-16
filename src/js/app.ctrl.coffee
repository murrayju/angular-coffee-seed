define [], () ->
  ctrl =
    BaseCtrl: [
      '$scope'
      'MessageService'
      ($scope, msg) ->
        $scope.msg = msg;
    ]

    P1Ctrl: [
      '$scope'
      ($scope) -> $scope.data = 'Check out this data binding!'
    ]
