'use strict';

var app = app || {};

(function(module) {

  function Playlists(playlistData) {
    Object.keys(playlistData).forEach(key => this[key] = playlistData[key]);
  };

  Playlists.prototype.toHtml = function() {
    return app.render('playlistItem-template', this);
  };

  Playlists.all = [];

  Playlists.fetchById = (ctx, next) => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/channels/${ctx.params.channel_id}`)
      .then(Playlists.loadPlaylists)
      .then(next)
      .catch(console.error);
  };

  Playlists.addNew = (ctx, next) => {
    $.ajax({
      url: `${app.ENVIRONMENT.apiUrl}/api/v1/addNew/${ctx.params.playlist_id}`,
      method: 'POST'
    })
    .then(response => console.log(response))
    .then(next)
    .catch(console.error);
  }
    
  Playlists.removePlaylist = (ctx, next) => {
    $.ajax({
      url: `${app.ENVIRONMENT.apiUrl}/api/v1/delete/${ctx.params.playlist_id}`,
      method: 'DELETE'
    })
    .then(response => console.log(response))
    .then(next)
    .catch(console.error);
  };
  
  Playlists.loadPlaylists = (listData) => {
    app.Playlists.all = listData.map(playlistData => new Playlists(playlistData));
  };

  module.Playlists = Playlists;
})(app)