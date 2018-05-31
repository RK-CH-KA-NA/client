'use strict';

var app = app || {};

(function(module){

  const iframeView = {};

  iframeView.initIframeView = function() {
    console.log('in iframe view');
   
    $('#iframe').empty();
    app.showOnly('#iframe');

    app.Videos.all.forEach(video => $('#iframe').append(video.toHtml()))

    
  };

  module.iframeView = iframeView;
})(app)

