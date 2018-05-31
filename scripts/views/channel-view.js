'use strict';

var app = app || {};

(function(module){

  const channelView = {};

  channelView.initIndexPage = function(ctx) {
    $('#content-creators').empty();
    app.showOnly('#home');
    app.Channels.all.forEach(channel => $('#content-creators').append(channel.toHtml()));
  }

  channelView.initAboutPage = function (ctx) {
    
    app.showOnly('#about-section');
  }
  module.channelView = channelView;
})(app)