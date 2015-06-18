import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.IndexController = Ember.Controller.extend({
  filterText: '',
  filteredResults: function() {
    var filter = this.get('filterText');
    alert(filter);
    return this.get('model').filter(function(item) {
      return item.toLowerCase().indexOf(filter) !== -1;
    });
  }.property('filterText')
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
