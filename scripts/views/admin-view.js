'use strict';

var app = app || {};

(function(module){

  const adminView = {};
  
  adminView.initAdminPage = function(ctx) {
    $('#home').empty();
    app.showOnly('#admin');

    $('.icon-plus').off();
    $('.icon-minus').off();
    
    $(".icon-plus").on('click', function() {      
      let idNum = $('#playlistField')[0].value;
      $('#playlistField')[0].value = "";
      page(`/addNew/${idNum}`);
    });
    
    $(".icon-minus").on('click', function() {
      let idNum = $('#playlistField')[0].value;
      $('#playlistField')[0].value = "";
      page(`/delete/${idNum}`);
    });
  };

  module.adminView = adminView;
})(app)