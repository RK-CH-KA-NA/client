'use strict';

var app = app || {};

(function(module){

  const channelView = {};
  
  channelView.initIndexPage = function(ctx) {
    $('#home').empty();
    app.showOnly('#home');
    app.Channels.all.forEach(channel => $('#home').append(channel.toHtml()));

    $('.channel').on('click', function() {
      page(`/channel/${ $(this).attr('data-id') }`);
    });
  };

  channelView.initAboutPage = function (ctx) {
    app.showOnly('#about-us');}

  module.channelView = channelView;
})(app)
