'use strict';

var app = app || {};

(function(module){

  const playlistView = {};

  playlistView.initPlaylistView = function() {
    $('#home').empty();
    app.showOnly('#home');
    app.Playlists.all.forEach(pl => $('#home').append(pl.toHtml()));
    $('.playlist').on('click', function() {
      page(`/playlists/${ $(this).attr('data-id') }`);
    });
  };

  module.playlistView = playlistView;
})(app)
