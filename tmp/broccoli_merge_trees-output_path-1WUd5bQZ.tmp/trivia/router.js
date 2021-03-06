import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('room');
  this.route('rooms', function() {
    this.route('new');
  });
  this.route('players', function() {
    this.route('new');
  });
});

export default Router;
