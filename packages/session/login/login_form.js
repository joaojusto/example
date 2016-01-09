angular
  .module('exampleApp.components', [])
  .directive('loginForm', loginForm);

function loginForm() {
  return {
    restrict: 'EA',
    scope: true,
    template: '<div></div>',
    link: function(scope, element) {
      Blaze.render(Template.login, element[0]);
    }
  };
}
