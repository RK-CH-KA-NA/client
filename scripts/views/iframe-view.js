'use strict';

var app = app || {};

(function(module){

  const iframeView = {};

  iframeView.initIframeView = function() {
    $('#iframe').empty();
    app.showOnly('#iframe');
    $('#iframe').append(app.Video.all[0].toHtml());
  };

  module.iframeView = iframeView;
})(app)
  