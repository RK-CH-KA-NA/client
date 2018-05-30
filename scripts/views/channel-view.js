'use strict';

var app = app || {};

(function(module){

  const channelView = {};

  channelView.initIndexPage = function(ctx) {
    app.showOnly('#home');
  }

  

  module.channelView = channelView;
})(app)