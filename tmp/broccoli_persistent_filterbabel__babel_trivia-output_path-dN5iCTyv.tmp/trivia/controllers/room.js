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