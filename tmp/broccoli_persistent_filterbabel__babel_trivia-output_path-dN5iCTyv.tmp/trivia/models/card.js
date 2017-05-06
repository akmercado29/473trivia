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