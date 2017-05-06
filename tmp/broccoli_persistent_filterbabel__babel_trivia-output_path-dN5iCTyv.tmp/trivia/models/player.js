define('trivia/models/player', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    username: _emberData['default'].attr('string'),
    firstName: _emberData['default'].attr('string'),
    lastName: _emberData['default'].attr('string')
  });
});