define('trivia/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/players-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/players-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/players/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/players/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/room-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/room-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/users-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/users-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/users/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/users/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/card-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/player-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/player-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/players-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/players-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/players/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/players/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/room-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/room-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rooms-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rooms-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rooms/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rooms/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rooms/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rooms/new-test.js should pass ESLint\n\n');
  });
});