Package.describe({
  name: 'exampleapp:session'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('templating', 'client');
  api.use('angular:angular@1.4.7', 'client');
  api.use('blaze-html-templates', 'client');

  api.addFiles([
    'login/login.html',
    'login/login.js',
    'login/login_form.js'
  ], 'client');
});
