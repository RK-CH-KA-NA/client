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
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/channels`)
      .then(Channels.loadAll)
      .catch(console.error)
      .then(callback)
      .catch(console.error)
  };

  Channels.loadAll = data => {
    Channels.all = data.map(channelData => new Channels(channelData));
  };

  module.Channels = Channels;
})(app)