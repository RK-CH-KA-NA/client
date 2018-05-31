'use strict';

var app = app || {};

(function(module){

  const iframeView = {};

  iframeView.initIframeView = function(ctx) {
    $('#iframe').empty();
    app.showOnly('#iframe');
    
    let filledIframe = app.render('iframe-template', {'id': ctx.params.playlist_id});

    $('#iframe').append(filledIframe);
  };

  module.iframeView = iframeView;
})(app)
  