define('trivia/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'trivia/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _triviaConfigEnvironment) {
  var _config$APP = _triviaConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});