'use strict';

var app = app || {};

(function(module){

  const playlistView = {};

  playlistView.initPlaylistView = function() {
    $('#playlists').empty();
    app.showOnly('#playlists');
    app.Playlists.all.forEach(pl => $('#playlists').append(pl.toHtml()));
    
    $('.playlist').on('click', function() {
      page(`/playlists/${ $(this).attr('data-id') }`);
    });
  };

  module.playlistView = playlistView;
})(app)
