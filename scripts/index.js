'use strict'

let app = app || {};

(function(module){
  let productionApiUrl = 'https://fellow-code.herokuapp.com/'
let developmentApiUrl = 'http://localhost:3000';

module.ENVIRONMENT = {
isProduction: /^(?!localhost|127)/.test(window.location.hostname),
apiUrl: this.isProduction ? productionApiUrl:
developmentApiUrl
};

  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  }
  module.render = (templateId, data) => {
    let template = Handlebars.compile($(`${templateId}`).text());
    return template(data);
  };

})(app);