'use strict';

var app = app || {};

(function(module){

  const channelView = {};
  
  channelView.initIndexPage = function(ctx) {
    $('#content-creators').empty();
    app.showOnly('#home');
    app.Channels.all.forEach(channel => $('#content-creators').append(channel.toHtml()));

    $('.channel').on('click', function() {
      page(`/channel/${ $(this).attr('data-id') }`);
    });
  };

  module.channelView = channelView;
})(app)
