'use strict';

var app = app || {};

(function(module){

  const iframeView = {};

  iframeView.initIframeView = function(ctx) {
    $('#home').empty();
    app.showOnly('#home');
    let filledIframe = app.render('iframe-template', {'id': ctx.params.playlist_id});
    $('#home').append(filledIframe);
  };

  module.iframeView = iframeView;
})(app)
  