Template.login.events({
  'click #login': function(event, tpl) {
    var email = tpl.$('#email').val();
    var password = tpl.$('#password').val();

    Meteor.loginWithPassword(email, password, function(err) {
      if (err)
        console.log(err);

      console.log('success!');
    });
  }
});
