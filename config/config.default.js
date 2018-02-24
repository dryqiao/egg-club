'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1516454637904_5192';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/club',
    options: {}
  };
  config.security = {
    domainWhiteList: [ 'http://localhost:8011'],
    csrf: {
      enable: false,
      ignoreJSON:true,
    },
  };
  config.redis = {
    client: {
      port: 6379,          // Redis port 
      host: '127.0.0.1',   // Redis host 
      password: '',
      db: 0,
    },
  }
  return config;
};
