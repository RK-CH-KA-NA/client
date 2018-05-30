'use strict';

var app = app || {};

(function(module){

  const playlistView = {};

  playlistView.initPlaylistView = function() {
    $('#playlists').empty();
    app.showOnly('#playlists');

    app.Playlists.all.forEach(pl => $('#playlists').append(pl.toHtml()));
  };

  module.playlistView = playlistView;
})(app)
