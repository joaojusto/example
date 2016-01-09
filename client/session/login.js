angular
  .module('exampleApp.session')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($auth) {
  var ctrl = this;

  $auth.requireValidUser(function(user) {
    ctrl.currentUser = user;
  });
}
