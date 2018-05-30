'use strict';

var app = app || {};

(function(module) {
  Channels.all = [];

  //Constructor
  function Channels(data) {
    Object.keys(data).forEach(key => this[key] = data[key]);
  };

  



  

  module.Channels = Channels;
})(app)