angular
  .module('exampleApp', [
    'angular-meteor',
    'angular-meteor.auth',
    'ui.router',
    'accounts.ui',
    'exampleApp.components',
    'exampleApp.session'
  ])
  .config(setupRoutes);

function setupRoutes($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'client/home.html'
    });

  $urlRouterProvider.otherwise('/');
}
