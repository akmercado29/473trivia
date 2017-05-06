define('trivia/router', ['exports', 'ember', 'trivia/config/environment'], function (exports, _ember, _triviaConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _triviaConfigEnvironment['default'].locationType,
    rootURL: _triviaConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('room');
    this.route('rooms', function () {
      this.route('new');
    });
    this.route('players', function () {
      this.route('new');
    });
  });

  exports['default'] = Router;
});