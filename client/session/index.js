angular
  .module('exampleApp.session', [])
  .config(setupRoutes);

function setupRoutes($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'client/session/login.html',
      controller: 'LoginCtrl as ctrl'
    });
}
