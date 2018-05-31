'use strict';

var app = app || {};

(function(module){

  const playlistView = {};

  playlistView.initPlaylistView = function() {
    console.log('in playlist view');
    
    $('#playlists').empty();
    app.showOnly('#playlists');

    app.Playlists.all.forEach(pl => $('#playlists').append(pl.toHtml()));

    $('.playlist img').on('click', function() {
      page(`/playlists/videos/${this.attributes['playlist-id'].value}`);
      
      
 
    });
  };

  module.playlistView = playlistView;
})(app)
