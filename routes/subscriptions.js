const controller = require('../controllers/subscriptions');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/subscriptions/:id').get(controller.getSubscriptions);
           
};