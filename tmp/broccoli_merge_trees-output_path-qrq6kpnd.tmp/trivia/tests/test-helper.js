define('trivia/tests/test-helper', ['exports', 'trivia/tests/helpers/resolver', 'ember-qunit'], function (exports, _triviaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_triviaTestsHelpersResolver['default']);
});