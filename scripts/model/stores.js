'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'insert heroku site';
ENV.developmentApiUrl = 'http://localhost:3000';

ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function (module) {
  function Stores(rawStoreObject) {
    Object.keys(rawStoreObject).forEach(key => this[key] = rawStoreObject[key]);
  }

  Stores.all = [];

  Stores.loadAll = rows => rows.map(store => new Stores(store));

  const searchStores = () => {
    $.get(`${ENV.apiUrl}/api/v1/get_stores`)
      .then(results => Stores.all.push(results))
      .then( () => {
        $.get(`${ENV.apiUrl}/api/v1/get_fast_food`)
          .then(results => Stores.all.push(results))
          .then( () => {
            Stores.all=Stores.all.map(function (e){
              return JSON.parse(e);
            });
            console.log(Stores.all);
            return Stores.all;
          })
          .catch(error => console.log(error, 'dont got nothing'));
      })
      .catch(error => console.log(error, 'dont got nothing'));
  };
  searchStores();

  module.Stores = Stores;
})(app);