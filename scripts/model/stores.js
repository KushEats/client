'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'insert heroku site';
ENV.developmentApiUrl = 'http://localhost:3000';

ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function (module) {

  const Stores = {};
  console.log(Stores);
  Stores.searchResults = () => {
    $.get(`${ENV.apiUrl}/api/v1/get_stores`)
      .then(results => console.log(results))
      .catch(error => console.log(error));
  };
  module.Stores.searchResults= Stores.searchResults;
})(app);