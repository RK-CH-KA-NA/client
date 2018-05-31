'use strict';

var app = app || {};

(function(module) {

  function Video(videoData) {
    Object.keys(videoData).forEach(key => this[key] = videoData[key]);
  };

  Video.prototype.toHtml = function() {
    return app.render('iframe-template', this);
  };

  Video.all = [];
  
  Video.loadVideos = (listData) => {  
    app.Video.all = listData.map(playlistData => new Video(playlistData));
  };

  module.Video = Video;
})(app)