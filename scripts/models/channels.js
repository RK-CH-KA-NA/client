'use strict';

var app = app || {};

(function(module) {

  function Channels(channelData) {
    Object.keys(channelData).forEach(key => this[key] = channelData[key]);
  };

  Channels.prototype.toHtml = function() {
    return app.render('channel-item-template', this);
  };

  Channels.all = [];

  Channels.fetchAll = (callback) => {
    /**
     * TODO - Make to Query database, not data file.
     */
    $.getJSON('./data/channels.json')
      .then(data => Channels.loadAll(data))
      .then(callback)
  };

  Channels.loadAll = data => {
    Channels.all = data.map(channelData => new Channels(channelData));
  };



  module.Channels = Channels;
})(app)