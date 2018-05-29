'use strict';

function Channels(data) {
      this.channel_id = data.channel_id;
      this.title = data.title;
      this.image_url = data.umage_url;
      this.description = data.description
    }

Channel.prototype.toHtml = function() {
  return app.render('channel-item-temmplate', this);
}

Channel.all = [];

Channel.loadAll = rows => Channel.all = rows.map(channel => new Channel(channel))

Channel.fetchAll = callback => 
    $.getJSON('../data/channels.json'
      .then(Channel.loadAll)
      .then(callback)
      .catch(errorCallback);
