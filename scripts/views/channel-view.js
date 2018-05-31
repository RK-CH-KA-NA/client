

(function($) {
    $(document).ready(function(){
 
        //When distance from top = 250px fade button in/out
        $(window).scroll(function(){
            if ($(this).scrollTop() > 250) {
                $('#scrollup').fadeIn(300);
            } else {
                $('#scrollup').fadeOut(300);
            }
        });
 
        //On click scroll to top of page t = 1000ms
        $('#scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
 
    });
})(jQuery);'use strict';

var app = app || {};

(function(module){

  const channelView = {};
  
  channelView.initIndexPage = function(ctx) {
    $('#content-creators').empty();
    app.showOnly('#home');
    app.Channels.all.forEach(channel => $('#content-creators').append(channel.toHtml()));

    $('.channel').on('click', function() {
      page(`/channel/${ $(this).attr('data-id') }`);
    });
  };

  module.channelView = channelView;
})(app)

// (function($) {
//     $(document).ready(function(){
 
        
//         $(window).scroll(function(){
//             if ($(this).scrollTop() > 250) {
//                 $('#scrollup').fadeIn(300);
//             } else {
//                 $('#scrollup').fadeOut(300);
//             }
//         });
 
        
//         $('#scrollup').click(function(){
//             $("html, body").animate({ scrollTop: 0 }, 1000);
//             return false;
//         });
 
//     });
// })(jQuery);