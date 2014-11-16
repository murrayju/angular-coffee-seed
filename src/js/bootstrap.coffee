# This is the main application entry point
# bootstraps the angularjs app with the dom
define [
  'angular',
  'cs!app',
  'fastclick'
], (angular, app, fastclick) ->
  angular.element().ready () ->
    angular.bootstrap document, [app.name]
    fastclick.attach document.body
