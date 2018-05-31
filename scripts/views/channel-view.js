'use strict';

var app = app || {};

(function(module){

  const channelView = {};
  


  channelView.initIndexPage = function(ctx) {
    $('#content-creators').empty();
    app.showOnly('#home');
    app.Channels.all.forEach(channel => $('#content-creators').append(channel.toHtml()));

    //Listening for user click section
    $('.channel').on('click', function() {
      page(`/playlists/${$(this).attr('data-id')}`);
    });
  };

  

  module.channelView = channelView;
})(app)