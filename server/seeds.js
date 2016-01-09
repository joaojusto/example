if (!Meteor.users.find().count())
  createAdmin();

function createAdmin() {
  Accounts.createUser({
    username: 'admin',
    email : 'admin@example.com',
    password : 'admin'
  });
}
