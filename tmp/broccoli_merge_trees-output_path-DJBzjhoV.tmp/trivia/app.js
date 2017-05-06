define('trivia/app', ['exports', 'ember', 'trivia/resolver', 'ember-load-initializers', 'trivia/config/environment'], function (exports, _ember, _triviaResolver, _emberLoadInitializers, _triviaConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _triviaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _triviaConfigEnvironment['default'].podModulePrefix,
    Resolver: _triviaResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _triviaConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});