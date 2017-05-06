define('trivia/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/players.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/players.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/players/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/players/new.js should pass ESLint\n\n1:16 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/room.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/room.js should pass ESLint\n\n');
  });

  QUnit.test('models/card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/card.js should pass ESLint\n\n');
  });

  QUnit.test('models/player.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/player.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/players.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/players.js should pass ESLint\n\n');
  });

  QUnit.test('routes/players/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/players/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/room.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/room.js should pass ESLint\n\n');
  });

  QUnit.test('routes/rooms.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rooms.js should pass ESLint\n\n');
  });

  QUnit.test('routes/rooms/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rooms/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/rooms/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rooms/new.js should pass ESLint\n\n');
  });
});