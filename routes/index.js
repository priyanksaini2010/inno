const users = require('./users');
const proxies = require('./proxies');
const profiles = require('./profiles');
const tasks = require('./tasks');
const taskgroups = require('./taskgroups');

module.exports = (router) => {
  users(router);
  proxies(router);
  profiles(router);
  tasks(router);
  taskgroups(router);
  return router;
};