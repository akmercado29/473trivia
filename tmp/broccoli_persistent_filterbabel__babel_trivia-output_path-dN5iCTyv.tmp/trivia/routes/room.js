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