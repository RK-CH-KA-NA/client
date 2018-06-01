'use strict';

var app = app || {};

(function (module){

  dropdownView.initDropDownView = function {
    $('.menu-button').click(function(){
      $(this).find('#drpd').toggle();
    
    })

  }
  

  module.dropdownView = dropdownView;
})(app)

