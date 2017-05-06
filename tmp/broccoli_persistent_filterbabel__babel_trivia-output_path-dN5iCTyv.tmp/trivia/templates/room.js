define("trivia/templates/room", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GzY7a2iP", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome to the Triva Room!\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"triviaForm\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"card\",\"question\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"Question:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"card\",\"question\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"comment\",\" <input type=\\\"radio\\\" name=\\\"choice\\\" value=\\\"a\\\">{{card.a}} \"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"radio-button\"],null,[[\"value\",\"checked\"],[\"a\",[\"get\",[\"choice\"]]]]],false],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"card\",\"a\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"radio-button\"],null,[[\"value\",\"checked\"],[\"b\",[\"get\",[\"choice\"]]]]],false],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"card\",\"b\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"radio-button\"],null,[[\"value\",\"checked\"],[\"c\",[\"get\",[\"choice\"]]]]],false],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"card\",\"c\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"radio\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"radio-button\"],null,[[\"value\",\"checked\"],[\"d\",[\"get\",[\"choice\"]]]]],false],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"card\",\"d\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"Answer:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"card\",\"reveal\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\" <div class=\\\"col-xs-12 col-sm-6 col-md-4\\\">\\n      <div class=\\\"well\\\">\\n        <div class=\\\"thumbnail\\\">\\n          <div class=\\\"caption\\\">\\n            <h3>{{witness.fullName}}</h3>\\n            <div class=\\\"panel panel-danger\\\">\\n              <div class=\\\"panel-heading\\\">Sightings</div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </div> \"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"answerCheck\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"card\"]}],\"hasPartials\":false}", "meta": { "moduleName": "trivia/templates/room.hbs" } });
});