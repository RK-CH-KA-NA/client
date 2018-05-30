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

  Playlists.fetchById = (ctx) => {
    /**
     * TODO - Make to Query database, not data file.
     */
     let id = ctx.params.channel_id;
    $.getJSON('./data/playlists.json')
      .then((data)  => Playlists.loadPlaylists(data, id))
  };

  Playlists.loadPlaylists = (objects, id) => {
    app.Playlists.all = objects.filter(list => list.channel_id === id).map(playlistData => new Playlists(playlistData));
  };

  module.Playlists = Playlists;
})(app)