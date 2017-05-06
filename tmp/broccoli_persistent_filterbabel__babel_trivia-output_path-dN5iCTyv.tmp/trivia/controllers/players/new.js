define('trivia/controllers/players/new', ['exports'], function (exports) {
  exports['default'] = Ember.Controller.extend({
    actions: {
      addUser: function addUser() {
        var user = this.get('username');
        var firstName = this.get('fName');
        var lastName = this.get('lName');
        alert('Your last name is ' + lastName);

        //create new player
        var newPlayer = this.store.createRecord('player', {
          username: user,
          firstName: firstName,
          lastName: lastName
        });

        // Save to DataBase (firebase.com)
        newPlayer.save();

        // Clear Form
        this.setProperties({
          username: '',
          fName: '',
          lName: ''
        });
      }
    }
  });
});