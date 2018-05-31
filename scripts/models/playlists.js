'use strict';

var app = app || {};

(function(module) {

  function Playlists(playlistData) {
    Object.keys(playlistData).forEach(key => this[key] = playlistData[key]);
  };

  Playlists.prototype.toHtml = function() {
    //console.log('playlist', this)
    return app.render('playlistItem-template', this);
  };

  Playlists.all = [];


  //playlists data for each channel
  Playlists.fetchById = (ctx, next) => {
    console.log(ctx)
    /**
     * TODO - Make to Query database, not data file.
     */
     let id = ctx.params.channel_id;
    $.getJSON('./data/playlists.json')
      .then((data)  => Playlists.loadPlaylists(data, id))
      .then(next)
    };

  Playlists.loadPlaylists = (objects, id) => {
    app.Playlists.all = objects.filter(list => list.channel_id === id).map(playlistData => new Playlists(playlistData));
    //console.log(app.Playlists.all); 

  };

//playlist by id
// app.Playlists.fetchByPlaylistId = (ctx, next) => {
//   //console.log(ctx)
 
//    let id = ctx.params.playlist_id;
//   $.getJSON('./data/playlists.json')
//     .then((data)  => Playlists.loadOnePlaylists(data, id))
//     .then(next)
//   };

// app.Playlists.loadOnePlaylists = (objects, id) => {
//   app.Playlists.all = objects.filter(list => list.playlist_id === id).map(playlistData => new Playlists(playlistData));
  //console.log(app.Playlists.all); 

// };


  module.Playlists = Playlists;
})(app)