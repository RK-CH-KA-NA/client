var app = app || {};

(function(module){

  let productionApiUrl = 'https://code-source.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction= /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
    $(this).scrollTop(0);
    $("iframe").each(function() { 
      var src= $(this).attr('src');
      $(this).attr('src',src);  
    });
  };

  module.render = (templateId, data) => {  
    let template = Handlebars.compile($(`#${templateId}`).text());
    return template(data);
  };

})(app);


