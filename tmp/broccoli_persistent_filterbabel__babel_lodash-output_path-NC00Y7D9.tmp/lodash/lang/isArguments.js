define('lodash/lang/isArguments', ['exports', 'lodash/internal/isArrayLike', 'lodash/internal/isObjectLike'], function (exports, _lodashInternalIsArrayLike, _lodashInternalIsObjectLike) {

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Native method references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /**
   * Checks if `value` is classified as an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    return (0, _lodashInternalIsObjectLike['default'])(value) && (0, _lodashInternalIsArrayLike['default'])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  }

  exports['default'] = isArguments;
});