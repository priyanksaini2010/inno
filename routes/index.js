const users = require('./users');
const proxies = require('./proxies');
const profiles = require('./profiles');
const tasks = require('./tasks');
const taskgroups = require('./taskgroups');
const subscriptions = require('./subscriptions');
const products = require('./products');
const customers = require('./customers');

module.exports = (router) => {
  users(router);
  proxies(router);
  profiles(router);
  tasks(router);
  taskgroups(router);
  subscriptions(router);
  products(router);
  customers(router);
  return router;
};