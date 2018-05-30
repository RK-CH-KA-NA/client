'use strict';

var app = app || {};

(function(module){

  const channelView = {};
  
  channelView.initIndexPage = function(ctx) {
    $('#content-creators').empty();
    app.showOnly('#home');
    app.Channels.all.forEach(channel => $('#content-creators').append(channel.toHtml()));

    $('.channel img').on('click', function() {
      page(`/playlists/${this.attributes['data-id'].value}`);
    });
  };


  module.channelView = channelView;
})(app)