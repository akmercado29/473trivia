define('trivia/tests/helpers/resolver', ['exports', 'trivia/resolver', 'trivia/config/environment'], function (exports, _triviaResolver, _triviaConfigEnvironment) {

  var resolver = _triviaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _triviaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _triviaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});