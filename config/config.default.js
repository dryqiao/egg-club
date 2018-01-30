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
      // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };
  return config;
};


// exports.mongoose = {
//   url: 'mongodb://127.0.0.1:27017/club',
//   options: {}
// };