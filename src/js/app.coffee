define [
  'angular',
  'cs!app.config',
  'cs!app.svc',
  'cs!app.ctrl',
  'app.templates',
  'angular-ui-router'
], (angular, appConfig, appSvc, appCtrl, appTemplates) ->
  angular.module 'MainAppModule', ['ui.router']
    .config(appConfig)
    .factory(appSvc)
    .controller(appCtrl)
    .run(appTemplates)
