"use strict";



define('trivia/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, _ember, _emberfireAdaptersFirebase) {
  var inject = _ember['default'].inject;
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({
    firebase: inject.service()
  });
});
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
define('trivia/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('trivia/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('trivia/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('trivia/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _emberRadioButtonsComponentsRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonsComponentsRadioButton['default'];
    }
  });
});
define('trivia/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('trivia/controllers/players', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('trivia/controllers/players/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
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
define('trivia/controllers/room', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      answerCheck: function answerCheck() {
        var answer = this.get('choice');
        alert('You selected answer: ' + answer);
      }
    }
  });
});
define('trivia/helpers/app-version', ['exports', 'ember', 'trivia/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _triviaConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _triviaConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('trivia/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('trivia/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('trivia/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'trivia/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _triviaConfigEnvironment) {
  var _config$APP = _triviaConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('trivia/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('trivia/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('trivia/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _emberDataSetupContainer, _emberDataIndex) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('trivia/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('trivia/initializers/export-application-global', ['exports', 'ember', 'trivia/config/environment'], function (exports, _ember, _triviaConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_triviaConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _triviaConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_triviaConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('trivia/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('trivia/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('trivia/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("trivia/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('trivia/models/card', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    question: _emberData['default'].attr('string'),
    a: _emberData['default'].attr('string'),
    b: _emberData['default'].attr('string'),
    c: _emberData['default'].attr('string'),
    d: _emberData['default'].attr('string'),
    answer: _emberData['default'].attr('string'),
    // This attribute is computed from other attributes
    // Returns the text belonging to the letter saved in 'answer'
    reveal: _ember['default'].computed('answer', function () {
      return '' + this.get(this.get('answer'));
    })
  });
});
define('trivia/models/player', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    username: _emberData['default'].attr('string'),
    firstName: _emberData['default'].attr('string'),
    lastName: _emberData['default'].attr('string')
  });
});
define('trivia/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('trivia/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trivia/routes/players', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('player');
    }
  });
});
define('trivia/routes/players/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trivia/routes/room', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var triviaCard = this.store.createRecord('card', {
        question: 'Which of the following is NOT a feature of ES6',
        a: 'Arrow Function Notation',
        b: 'Enhanced Object Literals',
        c: 'Bean Validation',
        d: 'Iterables and iterators',
        answer: 'c'
      });
      // let triviaCard2 = this.store.createRecord('card', {
      //   question: 'QUESTION2 WHAT IS BLA BLA BLA',
      //   a: 'Arrow Function Notation',
      //   b: 'Enhanced Object Literals',
      //   c: 'Bean Validation',
      //   d: 'Iterables and iterators',
      //   answer: 'a'
      // });
      // let triviaCard3 = this.store.createRecord('card', {
      //   question: 'QUESTION3 WHAT IS BLA BLA BLA',
      //   a: 'Arrow Function Notation',
      //   b: 'Enhanced Object Literals',
      //   c: 'Bean Validation',
      //   d: 'Iterables and iterators',
      //   answer: 'b'
      // });
      // return [triviaCard, triviaCard2, triviaCard3];
      return [triviaCard];
    }
  });
});
define('trivia/routes/rooms', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trivia/routes/rooms/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trivia/routes/rooms/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('trivia/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('trivia/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('trivia/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define("trivia/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ikypFA9t", "block": "{\"statements\":[[\"open-element\",\"header\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"comment\",\" Brand and toggle get grouped for better mobile display \"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#top-navbar-collapse\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"index\"],null,4],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"comment\",\" Collect the nav links, forms, and other content for toggling \"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"top-navbar-collapse\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"rooms\"],null,3],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"room\"],null,2],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"players\"],null,1],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"players.new\"],null,0],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\" /.container-fluid \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"New player\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Players\"]],\"locals\":[]},{\"statements\":[[\"text\",\"(Master) Room\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Rooms\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"navbar-brand\"],[\"flush-element\"],[\"text\",\"Trivia\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/application.hbs" } });
});
define("trivia/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/tudC9tK", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome to Trivia\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/index.hbs" } });
});
define("trivia/templates/players", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Mi6uPXtA", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Players\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Username: \"],[\"append\",[\"unknown\",[\"player\",\"username\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"First Name: \"],[\"append\",[\"unknown\",[\"player\",\"firstName\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Last Name: \"],[\"append\",[\"unknown\",[\"player\",\"lastName\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"player\"]}],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/players.hbs" } });
});
define("trivia/templates/players/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rjslweB7", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Register now to play!\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Username\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"form-control\",[\"get\",[\"username\"]],\"Enter your username\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"First Name\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"form-control\",[\"get\",[\"fName\"]],\"Enter your first name\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Last Name\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"form-control\",[\"get\",[\"lName\"]],\"Enter your last name\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addUser\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\" {{outlet}} \"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/players/new.hbs" } });
});
define("trivia/templates/room", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GzY7a2iP", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome to the Triva Room!\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"triviaForm\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"card\",\"question\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"Question:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"card\",\"question\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"comment\",\" <input type=\\\"radio\\\" name=\\\"choice\\\" value=\\\"a\\\">{{card.a}} \"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"radio-button\"],null,[[\"value\",\"checked\"],[\"a\",[\"get\",[\"choice\"]]]]],false],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"card\",\"a\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"radio-button\"],null,[[\"value\",\"checked\"],[\"b\",[\"get\",[\"choice\"]]]]],false],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"card\",\"b\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"radio-button\"],null,[[\"value\",\"checked\"],[\"c\",[\"get\",[\"choice\"]]]]],false],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"card\",\"c\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"radio-button\"],null,[[\"value\",\"checked\"],[\"d\",[\"get\",[\"choice\"]]]]],false],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"card\",\"d\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"Answer:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"card\",\"reveal\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\" <div class=\\\"col-xs-12 col-sm-6 col-md-4\\\">\\n      <div class=\\\"well\\\">\\n        <div class=\\\"thumbnail\\\">\\n          <div class=\\\"caption\\\">\\n            <h3>{{witness.fullName}}</h3>\\n            <div class=\\\"panel panel-danger\\\">\\n              <div class=\\\"panel-heading\\\">Sightings</div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </div> \"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"answerCheck\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"card\"]}],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/room.hbs" } });
});
define("trivia/templates/rooms", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "u1Hv7jiy", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Rooms\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/rooms.hbs" } });
});
define("trivia/templates/rooms/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5an8eNRg", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Room Number\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Status\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"comment\",\" START: Generate list with Handlebars \"],[\"text\",\"\\n      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"Dummy Cell\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"In Progress\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"comment\",\" END: Generate list with Handlebars \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/rooms/index.hbs" } });
});
define("trivia/templates/rooms/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3pKU+6X7", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/rooms/new.hbs" } });
});
define('trivia/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});


define('trivia/config/environment', ['ember'], function(Ember) {
  var prefix = 'trivia';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("trivia/app")["default"].create({"name":"trivia","version":"0.0.0+9795d9e5"});
}
//# sourceMappingURL=trivia.map
