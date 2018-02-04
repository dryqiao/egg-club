'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.resources('index', '/api/index',controller.home)
  router.resources('users','/api/users',controller.users)
  router.resources('session','/api/session',controller.session)
};
